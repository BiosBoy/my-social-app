const sortByDate = <T>(data: T[] & { date: string }[]) => {
  return [...data].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export default sortByDate;
