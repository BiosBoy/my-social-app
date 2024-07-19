const sortByDate = <T>(data: T[]) =>
  [...data].sort(
    (a, b) =>
      // @ts-ignore
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )

export default sortByDate
