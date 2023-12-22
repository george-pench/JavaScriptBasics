'use strict'

class DateFormatter {
  constructor (input, inputFormat = 'DDMMYYYY', outputFormat = 'DD-MM-YYYY') {
    this.date = this.parseDate(input, inputFormat)
    this.outputFormat = outputFormat
  }

  parseDate (input, format) {
    let year, month, day

    switch (format) {
      case 'DDMMYYYY':
        day = input.substring(0, 2)
        month = input.substring(2, 4)
        year = input.substring(4, 8)
        break
      case 'YYYYMMDD':
        year = input.substring(0, 4)
        month = input.substring(4, 6)
        day = input.substring(6, 8)
        break
      case 'YYYY-MM-DD':
        [year, month, day] = input.split('-')
        break
      default:
        throw new Error(`Wrong input format: ${format}`)
    }

    return new Date(Date.UTC(year, month - 1, day))
  }

  format (outputFormat = 'DD-MM-YYYY') {
    const pad = (num) => num.toString().padStart(2, '0')

    const day = pad(this.date.getUTCDate())
    const month = pad(this.date.getUTCMonth() + 1)
    const year = this.date.getUTCFullYear()
    const monthName = new Date(Date.UTC(year, this.date.getUTCMonth(), day)).toLocaleString('en-US', { month: 'long', timeZone: 'UTC' })

    switch (outputFormat) {
      case 'DD-MM-YYYY':
        return `${day}-${month}-${year}`
      case 'DD Month YYYY':
        return `${day} ${monthName} ${year}`
      case 'MM-DD-YYYY':
        return `${month}-${day}-${year}`
      default:
        return `${day}-${month}-${year}`
    }
  }

  fromNow () {
    const now = new Date()
    const diff = now.getUTCFullYear() - this.date.getUTCFullYear()
    return `${diff} years ago`
  }
}

export default DateFormatter
