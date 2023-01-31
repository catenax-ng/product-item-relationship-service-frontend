FROM node:19-slim as build

RUN mkdir -p /opt/app
WORKDIR /opt/app

RUN adduser app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN chown -R app /opt/app
USER app

EXPOSE 3000
CMD ["npm", "run", "start"]

# docker build -t product-item-relationship-service-frontend .
# docker run -p 8080:3000 --name irs-frontend product-item-relationship-service-frontend
# docker tag product-item-relationship-service-frontend ghcr.io/catenax-ng/product-item-relationship-service-frontend
