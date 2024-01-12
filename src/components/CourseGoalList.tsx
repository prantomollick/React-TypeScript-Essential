import { ReactNode } from "react";
import { CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={`${goal.title} ${Date.now()}`}
              onDelete={onDelete}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
