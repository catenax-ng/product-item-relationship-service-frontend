import { Box } from "@mui/material";
import { MainHeader, Typography } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { PublicHeader } from "../../components/layout/Header/PublicHeader";
import { PaddedSection } from "../../components/layout/PaddedSection";
import { IRSSelectServerEnv } from "./components/IRSSelectServerEnv";
import { LoginButton } from "./components/LoginButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";

/**
 * The welcome page
 * allows the user to select the server environment
 * allow the user to log in
 * @returns React.Node
 */
export const WelcomePage: React.FC = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <PublicHeader />
      <MainHeader
        background="LinearGradient1"
        headerHeight={window.innerHeight}
        imagePath="./img/home-stage-desktop.png"
      >
        <PaddedSection>
          <Box
            component="img"
            src="/img/IRS_FE_Logo_long.png"
            sx={{
              display: "inline-block",
            }}
          />
        </PaddedSection>

        <PaddedSection>
          <Typography variant="body1">{t("content.irs.welcomePage.headerSubtitle")}</Typography>
        </PaddedSection>

        <IRSSelectServerEnv />
        <TextField style={{ display: "block" }} placeholder={"Username"} id="username" onChange={handleUsernameInput} />
        <TextField
          style={{ display: "block" }}
          placeholder={"Password"}
          id="password"
          type={"password"}
          onChange={handlePasswordInput}
        />
        <LoginButton username={username} password={password} />
      </MainHeader>
    </div>
  );
};
