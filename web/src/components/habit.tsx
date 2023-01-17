interface HabitPropos {
    completed: number
}

export function Habit(props: HabitPropos) {
    return (
      <h1>{props.completed}</h1>
    )
  }
  
  
  