
try {
  o.m.g.w.t.f()
}
catch(ex) {
  for(var p in ex) {
    test.print('ex.' + p + ' = ' + ex[p])
  }

  test.print('ex.message = ' + ex.message)
  test.print('ex.stack = ' + ex.stack)
}
