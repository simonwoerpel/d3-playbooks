export default ({
  chart,
  playbook,
  playbookFuncs
}) => {
  for (let [func, functions] of playbook) {
    chart[func] = () => {
      for (let [attr, f] of functions) {
        chart[attr] = playbookFuncs.get(f)(chart)
      }
    }
  }
}
