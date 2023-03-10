import {CalendarMonth} from './CalendarMonth.js'

const $fullCalendar = document.getElementById('full-calendar')

for(let i=0; i < 12; i++){
    const $container = document.createElement('div')
    $container.classList.add('calendar') 

    const calendar = new CalendarMonth($container)
    calendar.month = i
    $fullCalendar.append($container)
}

const calendar = new CalendarMonth();

 const monthsList = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
  
const weekDaysList = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  

// Выбранная дата
const currentDate = new Date()
const selectMonth = currentDate.getMonth()
const selectYear = currentDate.getFullYear()

const $calendar = document.getElementById('calendar')

// Проверка сегодняшнего дня
function checkToday(selectYear, selectMonth, selectDay) {
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    if (day == selectDay && month == selectMonth && year == selectYear) return true
}

document.getElementById('back-btn').addEventListener('click', function() {
   calendar.month--
})

document.getElementById('next-btn').addEventListener('click', function() {
    calendar.month++
})


/*
// Шапка календаря
function createCalendarHead(selectYear, selectMonth) {
    const $head = document.createElement('div')
    const $month = document.createElement('div')
    const $year = document.createElement('div')

    $head.classList.add('calendar__head', 'border-radius')
    $month.classList.add('calendar__month')
    $year.classList.add('calendar__year')

    $month.textContent = monthsList[selectMonth]
    $year.textContent = selectYear

    $head.append($month)
    $head.append($year)

    return $head
}


// Тело календаря
function createCalendarBody() {
    const $body = document.createElement('div')
    $body.classList.add('calendar__body')
    return $body
}


// День недели
function createWeekDayCell(index) {
    const $weekDayCell = document.createElement('div')
    $weekDayCell.classList.add('calendar__cell', 'calendar__cell_week-day', 'border-radius')
    $weekDayCell.textContent = weekDaysList[index]

    if (index > 4) {
        $weekDayCell.classList.add('calendar__cell_weekend', 'border-radius')
    }

    return $weekDayCell
}

// Шапка с днями недели
function createCalendarWeekDays($body) {
    for (let i = 0; i < weekDaysList.length; i++) {
        $body.append(createWeekDayCell(i))
    }
}

// День
function createDayCell(selectYear, selectMonth, index) {
    const firstDay = new Date(selectYear, selectMonth, 0).getDay()
    const day = index - firstDay + 1
            const weekDay = new Date(selectYear, selectMonth, day).getDay()
    
            const $dayCell = document.createElement('div')
            $dayCell.classList.add('calendar__cell', 'calendar__cell_day', 'border-radius')
            $dayCell.textContent = day
    
            if (weekDay == 0 || weekDay == 6) {
                $dayCell.classList.add('calendar__cell_day-wekend', 'border-radius')
            }
    
            if (checkToday(selectYear, selectMonth, day)) {
                $dayCell.classList.add('calendar__cell_day-today', 'border-radius')
            }
    
            return $dayCell
    
}

function createCalendarBodyDays($body, selectYear, selectMonth) {
    // Сетка календаря (дни недели)
    for (let i = 0; i < weekDaysList.length * 6; i++) {
        const firstDay = new Date(selectYear, selectMonth, 0).getDay()
        const monthDaysCount = new Date(selectYear, selectMonth+1,0).getDate()
        if (i >= firstDay && i < monthDaysCount + i) {
            $body.append(createDayCell(selectYear, selectMonth, i))
        } else {
            const $dayCell = document.createElement('div')
            $dayCell.classList.add('calendar__cell', 'border-radius')
            $body.append($dayCell)
        }
    }
}

// Отрисовка
function render(selectYear, selectMonth) {
    $calendar.innerHTML = ''

    const $head = createCalendarHead(selectYear, selectMonth)
    $calendar.append($head)

    const $body = createCalendarBody()
    $calendar.append($body)

    createCalendarWeekDays($body)

    createCalendarBodyDays($body, selectYear, selectMonth)
}

render(currentDate.getFullYear(), currentDate.getMonth())

document.getElementById('back-btn').addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() - 1)
    render(currentDate.getFullYear(), currentDate.getMonth())
})

document.getElementById('next-btn').addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() + 1)
    render(currentDate.getFullYear(), currentDate.getMonth())
})
*/