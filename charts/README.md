# IRS Frontend Chart

## Prerequisites

1. IRS service is available
2. Keycloak service is available

## Kubernetes

Change default namespace

```bash
kubectl config set-context minikube --namespace=irs
```

Port forwarding

```bash
kubectl port-forward svc/irs-frontend-service 3000:8080
```

## Installing the Chart

```bash
helm install irs-frontend --set install.irs.frontend=true --namespace irs --create-namespace .
        
```  

## Uninstalling the Chart

``` bash
helm uninstall irs-frontend --namespace irs
```

## Parameters

### Global parameters

| Name              | Description               | Value                                                         |
| ----------------- | ------------------------- | ------------------------------------------------------------- |
| image.repository  | Docker image repository   | ghcr.io/catenax-ng/product-item-relationship-service-frontend |
| image.tag         | Docker image tag          | main                                                          |

### Frontend configuration

| Name                      | Description               | Value                                 |
| ------------------------- | ------------------------- | ------------------------------------- |
| registry.url              | IRS registry url          | http://localhost:8080                 |
| keycloak.url              | Keycloak url              | http://localhost:4011/connect/token   |
| keycloak.grand.type       | Keycloak grand type       | client_credentials                    |
| keycloak.scope            | Keycloak scope            | catena-scope                          |
| keycloak.client.id        | Keycloak client id        | catena-client-id                      |
| keycloak.client.secret    | Keycloak client secret    | catena-client-secret                  |
