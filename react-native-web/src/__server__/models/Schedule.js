import schedules from '../db/schedules.json';


class Schedule {
  findAll() {
    return schedules;
  }

  findById({scheduleId}) {
    return schedules.find(schedule => schedule.id === scheduleId)
  }
}

export default new Schedule();