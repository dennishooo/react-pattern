parents 既 state changes 都會 trigger child component to re-render, 就算用 useMemo 都會

useMemo
caches the results of whatever fucntion you pass into it, only refresh when dependency changes

如果個 parent 有 state 而佢有 child 係唔 depend on 佢既 state, 就應該用 useMemo 去包住佢
