type MDXComponentMap = Record<string, React.ComponentType<unknown>>;

export function useMDXComponents(components: MDXComponentMap): MDXComponentMap {
  return {
    ...components,
  };
}