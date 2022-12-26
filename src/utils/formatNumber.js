// eslint-disable-next-line
export default number => {
    const formatNumbering = new Intl.NumberFormat("id-ID");
      return formatNumbering.format(number);
  }
  