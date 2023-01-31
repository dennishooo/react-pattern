## React components re-render:

- when component's state changed
- when parent component re-renders
- when a component uses context and the value of its provider changes

## And the rules we extracted:

`Rule #1`: If the only reason why you want to extract your inline functions in props into useCallback is to avoid re-renders of children components: don’t. It doesn’t work.

`Rule #2`: If your component manages state, find parts of the render tree that don’t depend on the changed state and memoise them to minimize their re-renders.

`Rule #3`. Never create new components inside the render function of another component.

## Remarks:

parents 既 state changes 都會 trigger child component to re-render, 就算用 useMemo 都會

useMemo
caches the results of whatever fucntion you pass into it, only refresh when dependency changes

如果個 parent 有 state 而佢有 child 係唔 depend on 佢既 state, 就應該用 useMemo 去包住佢

Never create new components inside the render function of another component.

context would bypass memorisation

When using context, make sure that value property is always memoised if it’s not a number, string or boolean.
