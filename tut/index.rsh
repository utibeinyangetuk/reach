'reach 0.1';

const Player = {
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null)
};

export const main=Reach.App(()=>{
  // declaring variables
  const Alice=Participant('Alice',{...Player})
  const Bob=Participant('Bob',{...Player})
  init()
// Alice
    Alice.only(()=>{
      const handAlice=declassify(interact.getHand())
    })
    Alice.publish(handAlice)
    commit();
// Bob
    Bob.only(()=>{const handBob=declassify(interact.getHand())})
    Bob.publish(handBob)
// Outcomes
    const outcome=(handAlice+(4-handBob)) % 3
    commit()
    each([Alice,Bob],()=>{
      interact.seeOutcome(outcome)
    })

})
