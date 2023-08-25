import React from 'react'

const NextButton = ({nextQue, currentAns, activeIndex}) => {
  return (
    <div>
        <button
          className="primary-btn large-btn"
          onClick={nextQue}
          disabled={currentAns === undefined}
        >
          {activeIndex < 9 ? "Next" : "Finish"}
        </button>
      </div>
  )
}

export default NextButton