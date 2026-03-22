import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Random "mo:core/Random";

actor {
  let facts = [
    "Honey never spoils.",
    "Bananas are berries.",
    "A group of flamingos is called a flamboyance.",
    "Wombat poop is cube-shaped.",
    "Octopuses have nine brains.",
    "The Eiffel Tower can grow taller in the summer.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Hot water freezes faster than cold water.",
    "The unicorn is Scotland's national animal.",
    "Some fish can cough.",
  ];
  
  public query ({ caller }) func getArraySize() : async Nat {
    facts.size();
  };

  public shared ({ caller }) func getRandomFact() : async Text {
    let random = Random.crypto();
    let index = await* random.natRange(0, facts.size());
    facts[index];
  };
};
