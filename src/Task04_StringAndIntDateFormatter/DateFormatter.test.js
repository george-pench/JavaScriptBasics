import DateFormatter from './DateFormatter.js'

describe('DateFormatter Tests in UTC', () => {
  test('formats "31102011" to "31-10-2011"', () => {
    const formatter = new DateFormatter('31102011')
    expect(formatter.format()).toBe('31-10-2011')
  })

  test('formats "31102011" to "31 October 2011"', () => {
    const formatter = new DateFormatter('31102011')
    expect(formatter.format('DD Month YYYY')).toBe('31 October 2011')
  })

  test('formats "20130431" (YYYYMMDD) to "01 May 2013"', () => {
    const formatter = new DateFormatter('20130501', 'YYYYMMDD')
    expect(formatter.format('DD Month YYYY')).toBe('01 May 2013')
  })

  test('formats "20130431" (YYYYMMDD) to "MM-DD-YYYY"', () => {
    const formatter = new DateFormatter('20130501', 'YYYYMMDD', 'MM-DD-YYYY')
    expect(formatter.format()).toBe('01-05-2013')
  })

  test('calculates "2013-04-31" from now', () => {
    const formatter = new DateFormatter('2013-04-31', 'YYYY-MM-DD')
    expect(formatter.fromNow()).toBe('10 years ago')
  })

  test('formats "20210305" (YYYYMMDD) to "05-03-2021"', () => {
    const formatter = new DateFormatter('20210305', 'YYYYMMDD')
    expect(formatter.format('DD-MM-YYYY')).toBe('05-03-2021')
  })

  test('formats leap year date "20200229" (YYYYMMDD) to "29-02-2020"', () => {
    const formatter = new DateFormatter('20200229', 'YYYYMMDD')
    expect(formatter.format('DD-MM-YYYY')).toBe('29-02-2020')
  })

  test('formats "20210503" (YYYYMMDD) to "03 May 2021"', () => {
    const formatter = new DateFormatter('20210503', 'YYYYMMDD')
    expect(formatter.format('DD Month YYYY')).toBe('03 May 2021')
  })

  test('formats "20211231" (YYYYMMDD) to "31 December 2021"', () => {
    const formatter = new DateFormatter('20211231', 'YYYYMMDD')
    expect(formatter.format('DD Month YYYY')).toBe('31 December 2021')
  })

  test('formats "20200229" (YYYYMMDD) to "29 February 2020"', () => {
    const formatter = new DateFormatter('20200229', 'YYYYMMDD')
    expect(formatter.format('DD Month YYYY')).toBe('29 February 2020')
  })
})
