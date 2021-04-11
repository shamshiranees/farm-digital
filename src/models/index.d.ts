import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class QandA {
  readonly id: string;
  readonly question?: string;
  readonly answer?: string;
  readonly creator_name?: string;
  readonly answered_by?: string;
  readonly project_id?: string;
  constructor(init: ModelInit<QandA>);
  static copyOf(source: QandA, mutator: (draft: MutableModel<QandA>) => MutableModel<QandA> | void): QandA;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly address?: string;
  readonly mobile_number?: string;
  readonly projects_created?: (string | null)[];
  readonly project_investe?: (string | null)[];
  readonly type?: string;
  readonly status?: string;
  readonly comment?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Project {
  readonly id: string;
  readonly name?: string;
  readonly location?: string;
  readonly description?: string;
  readonly crop?: string;
  readonly duration?: string;
  readonly start_date?: string;
  readonly end_date?: string;
  readonly fund?: string;
  readonly portions?: string;
  readonly detailed_description?: string;
  readonly documents?: (string | null)[];
  readonly images?: (string | null)[];
  readonly status?: string;
  readonly fund_received?: string;
  readonly minimum_fund_required?: string;
  readonly other_comments?: string;
  readonly comments?: (QandA | null)[];
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}