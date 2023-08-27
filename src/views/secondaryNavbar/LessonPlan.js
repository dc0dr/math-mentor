import React from 'react';
import '../../styles/Lesson.scss';
import GenerateLessonPlan from '../GenerateLessonPlan';

function LessonPlan() {
  return (
    <div className={'Lesson'}>
      <GenerateLessonPlan />
    </div>
  )
}

export default LessonPlan;