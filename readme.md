# About
This repository contains examples of using the [Execute JavaScript Assertion](https://docops.ca.com/ca-api-gateway/9-4/en/policy-assertions/assertion-palette/service-availability-assertions/execute-javascript-assertion).

# Getting Started
Before getting started, you must copy CA API Gateway license file to `./docker/license.xml`.

## Starting Docker containers
To start the Docker containers, run the following command:

`docker-compose up`

This will start the Gateway Docker container with 3 sample services on it.

## Demo Services

### /prime-game
Open this in a browser: [http://localhost:8080/prime-game](http://localhost:8080/prime-game)

This uses the JavaScript Assertion to create a game where you can guess if some numbers are prime.
 
### /xml-inspect
POST an xml document to '/xml-inspect'. This will count the total number of elements in the xml document and also count the total number of each element type. Example response:
```json
{
  "totalElement": 38,
  "elements": {
    "Policy": 1,
    "All": 3,
    "JavaScript": 1,
    "ExecutionTimeout": 1,
    "Name": 1,
    "Script": 1,
    "OneOrMore": 1,
    "ComparisonAssertion": 2,
    "CaseSensitive": 4,
    "Expression1": 2,
    "Operator": 2,
    "Predicates": 2,
    "item": 4,
    "Type": 2,
    "RightValue": 2,
    "HardcodedResponse": 3,
    "ResponseBody": 3,
    "ResponseContentType": 3
  }
}
```

### /inspect-policy
POST a policy document to '/inspect-policy'. This will count the total number of assertions in a policy and also give you individual counts of each assertion.
It will also give you a skeleton version of the policy in json. Example response:
```json
{
  "totalAssertions": 10,
  "assertions": {
    "All": 3,
    "JavaScript": 1,
    "OneOrMore": 1,
    "ComparisonAssertion": 2,
    "HardcodedResponse": 3
  },
  "policy": [
    {
      "All": [
        "JavaScript",
        {
          "OneOrMore": [
            {
              "All": [
                "ComparisonAssertion",
                "HardcodedResponse"
              ]
            },
            {
              "All": [
                "ComparisonAssertion",
                "HardcodedResponse"
              ]
            },
            "HardcodedResponse"
          ]
        }
      ]
    }
  ]
}
```

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