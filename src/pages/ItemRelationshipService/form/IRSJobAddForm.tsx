import { Box } from "@mui/material";

import { Button } from "cx-portal-shared-components";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { serverConfig } from "../../../constants/serverConfig";
import { useAppSelector } from "../../../store/store";
import { IRSJobAddFormTextfield } from "./components/IRSJobAddFormTextfield";

type DefaultFormFieldValuesType = {
  RequestBodyValues: string;
  Environment: string;
};

const useGetCurrentServerUrl = () => {
  const { serverEnv } = useAppSelector((state) => state.serverEnvReducer);
  return serverConfig[serverEnv].value;
};

export const IRSJobAddForm = () => {
  const { t } = useTranslation();
  const serverUrl = useGetCurrentServerUrl();

  const testJob = {
    aspects: ["AssemblyPartRelationship", "SerialPartTypization"],
    bomLifecycle: "asBuilt",
    collectAspects: true,
    direction: "downward",
    depth: 10,
    globalAssetId: "urn:uuid:d387fa8e-603c-42bd-98c3-4d87fef8d2bb",
  };

  const defaultFormFieldValues = {
    RequestBodyValues: JSON.stringify(testJob, null, 2),
    Environment: serverUrl,
  };

  const {
    handleSubmit,
    getValues,
    control,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormFieldValues,
    mode: "onChange",
  });

  const handleConfirm = async (formValues: DefaultFormFieldValuesType) => {
    console.log("Form data:", formValues);
    try {
      // TODO: Do Action Write to DB
      // dispatch(postJob(JSON.parse(formValues.RequestBodyValues)));
      console.log();
    } catch (error) {
      console.log(error);
    }
  };

  const onFormSubmit = async () => {
    const validateFields = await trigger(["RequestBodyValues", "Environment"]);

    if (validateFields) {
      const formValues = getValues();
      handleConfirm(formValues);
    }
  };

  const formHasErrors = () => {
    return Object.keys(errors).length > 0;
  };

  return (
    <section>
      <Box className="irs-job-form">
        <Box className="irs-job-form-header">
          <h5>{t("content.irs.form.title")}</h5>
        </Box>
        <Box
          className="irs-job-form-content"
          style={{
            margin: "20px",
          }}
        >
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <IRSJobAddFormTextfield
              {...{
                control,
                errors,
                trigger,
                name: "RequestBodyValues",
                rules: {
                  required: true,
                  validate: (value: string) => {
                    try {
                      JSON.parse(value);
                    } catch (e) {
                      return false;
                    }
                    return true;
                  },
                },
                label: t("content.irs.form.requestBodyValues.label"),
                helperText: t("content.irs.form.requestBodyValues.helperText"),
              }}
            />
          </form>
          <Button
            style={{ marginTop: 20 }}
            variant="contained"
            color="secondary"
            onClick={onFormSubmit}
            disabled={formHasErrors()}
          >
            {t("content.irs.form.sendButton")}
          </Button>
        </Box>
      </Box>
    </section>
  );
};
