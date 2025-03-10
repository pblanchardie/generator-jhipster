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

import type EntityIssue from './entity-issue.js';
import type FieldIssue from './field-issue.js';
import type EnumIssue from './enum-issue.js';
import type RelationshipIssue from './relationship-issue.js';

export default class Issues {
  entityIssues: EntityIssue[];
  fieldIssues: FieldIssue[];
  enumIssues: EnumIssue[];
  relationshipIssues: RelationshipIssue[];

  constructor() {
    this.entityIssues = [];
    this.fieldIssues = [];
    this.enumIssues = [];
    this.relationshipIssues = [];
  }

  addEntityIssues(issues: EntityIssue[] = []) {
    this.entityIssues = this.entityIssues.concat(issues);
  }

  addFieldIssues(issues: FieldIssue[] = []) {
    this.fieldIssues = this.fieldIssues.concat(issues);
  }

  addEnumIssues(issues: EnumIssue[] = []) {
    this.enumIssues = this.enumIssues.concat(issues);
  }

  addRelationshipIssues(issues: RelationshipIssue[] = []) {
    this.relationshipIssues = this.relationshipIssues.concat(issues);
  }

  getNumberOfIssues() {
    return (
      this.getNumberOfEntityIssues() + this.getNumberOfFieldIssues() + this.getNumberOfEnumIssues() + this.getNumberOfRelationshipIssues()
    );
  }

  getNumberOfEntityIssues() {
    return this.entityIssues.length;
  }

  getNumberOfFieldIssues() {
    return this.fieldIssues.length;
  }

  getNumberOfEnumIssues() {
    return this.enumIssues.length;
  }

  getNumberOfRelationshipIssues() {
    return this.relationshipIssues.length;
  }

  getIssues() {
    return {
      entities: this.entityIssues,
      enums: this.enumIssues,
      fields: this.fieldIssues,
      relationships: this.relationshipIssues,
    };
  }
}
