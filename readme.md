# About
This repository contains a service that implements a simple web-based tick-tack-toe game using a Gateway.

# Getting Started
Before getting started, you must copy CA API Gateway license file to `./docker/license.xml`.

## Starting Docker containers
To start the Docker containers, run the following command:

`docker-compose up`

## Stopping Docker containers
To stop the running Docker container, run the following command:

`docker-compose  down`

# Managing the Gateway Configuration
The gateway configuration is managed and built using the [gateway-developer-plugin](https://github.com/ca-api-gateway/gateway-developer-plugin).

## Building a Deployment Package
Build a deployment package by running `gradle build`. This will create a gw7 package in `deployment/build/gateway/deployment-1.0.0.gw7`

## Exporting Policy Updates
In order to export policy updates first make sure your gateway is running. Then run `gradle export`. This will export relevant policy changes.

# Giving Back
## How You Can Contribute
Contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines][contributing].

## License

Copyright (c) 2018 CA. All rights reserved.

This software may be modified and distributed under the terms
of the MIT license. See the [LICENSE][license-link] file for details.


 [license-link]: /LICENSE
 [contributing]: /CONTRIBUTING.md