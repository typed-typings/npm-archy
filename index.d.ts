declare function archy (obj: archy.Tree, prefix?: string, opts?: archy.Options): string;

declare namespace archy {
  export interface Tree {
    label: string;
    nodes: Array<string | Tree>;
  }

  export interface Options {
    unicode?: boolean;
  }
}

export = archy;
