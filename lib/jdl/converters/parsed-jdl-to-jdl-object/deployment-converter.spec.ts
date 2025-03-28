/**
 * Copyright 2013-2025 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { before, describe, expect, it } from 'esmocha';
import { convertDeployments } from './deployment-converter.js';

describe('jdl - DeploymentConverter', () => {
  describe('convertDeployments', () => {
    describe('when not passing deployments', () => {
      it('should fail', () => {
        // @ts-expect-error
        expect(() => convertDeployments()).toThrow(/^Deployments have to be passed so as to be converted\.$/);
      });
    });
    describe('when passing deployments', () => {
      let convertedDeployments;

      before(() => {
        convertedDeployments = convertDeployments([
          {
            deploymentType: 'docker-compose',
            appsFolders: ['tata', 'titi'],
            dockerRepositoryName: 'test',
          },
        ]);
      });

      it('should convert them', () => {
        expect(convertedDeployments).toMatchInlineSnapshot(`
[
  JDLDeployment {
    "appsFolders": Set {
      "tata",
      "titi",
    },
    "clusteredDbApps": Set {},
    "deploymentType": "docker-compose",
    "directoryPath": "../",
    "dockerRepositoryName": "test",
    "gatewayType": "SpringCloudGateway",
    "ingressDomain": undefined,
    "ingressType": undefined,
    "istio": undefined,
    "kubernetesServiceType": undefined,
    "monitoring": "no",
    "serviceDiscoveryType": "consul",
    "storageType": undefined,
  },
]
`);
      });
    });
  });
});
