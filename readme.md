parents 既 state changes 都會 trigger child component to re-render, 就算用 useMemo 都會

useMemo
caches the results of whatever fucntion you pass into it, only refresh when dependency changes
