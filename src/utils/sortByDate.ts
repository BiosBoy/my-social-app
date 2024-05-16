const sortByDate = <T>(data: T[]) => {
  return [...data].sort((a, b) => {
    // @ts-ignore
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export default sortByDate;
