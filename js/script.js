//Rule Feature

const rule_btn = document.querySelector(".footer__cta");
const rule_btn_close = document.querySelector('.rules__card--content--closer--img');
const rule = document.querySelector('.rules');

rule_btn.addEventListener('click', (e) => {
    e.preventDefault();
    rule.classList.remove('hidden');
});

rule_btn_close.addEventListener('click', (e) => {
    e.preventDefault();
    rule.classList.add('hidden');
})

window.addEventListener('load', (e) => {
    e.preventDefault();
    rule.classList.remove('hidden');
})

//Mobile-Rules Card
const mobile_btn_close = document.querySelector('.rules__mobile--closer');

rule_btn.addEventListener('click', (e) => {
    e.preventDefault();
    rule.classList.remove('hidden');
});

mobile_btn_close.addEventListener('click',e => {
    e.preventDefault();
    rule.classList.add('hidden');
})

///////////////////////////////////////////////////////////////
// Choice Array
const choice = ["rock", "paper", "scissors"];

//Game Layout
const game_layout = document.querySelector('.game');



//Player Choice Element Which Will Trigger Render
const p_paper = document.querySelector(".game__segment-1--paper");
const p_scissor = document.querySelector(".game__segment-1--scissors");
const p_rock = document.querySelector(".game__segment-2--rock");

//Player Choice
let player_choice = "";

let player_score = 0;

//Player Score Text
const player_score_text = document.querySelector(
  ".header__banner--score-card--score-num"
);

//Player-Choice Code Segment to be hidden after selection has been made
const game_segment_1 = document.querySelector(".game__segment-1");
const game_segment_2 = document.querySelector(".game__segment-2");

//Must be rendered after Choice has been Made
const game_play_segment = document.querySelector(".game__play");
const game_play_segment_1 = document.querySelector(".game__play--segment-1");
const game_play_segment_2 = document.querySelector(".game__play--segment-2");

//Result Output
const game_play_result = document.querySelector(".game__play--segment-result");

const game_play_result_text = document.querySelector(
  ".game__play--segment-result--text"
);

const game_play_result_cta = document.querySelector(
  ".game__play--segment-result--cta"
);

player_score_text.innerHTML = 0;

//Reset Button Functionality
game_play_result_cta.addEventListener("click", (e) => {
  e.preventDefault();
  player_score_text.innerHTML = 0;
  location.reload();
});

//Functionality and Activity

//1. When Paper clicked
p_paper.addEventListener("click", (e) => {
  e.preventDefault();
  game_layout.style.backgroundImage = "none";
  player_choice = choice[1];
  game_play_segment_1.insertAdjacentHTML(
    "beforeend",
    player_pick_html(player_choice)
  );
  game_segment_1.style.display = "none";
  game_segment_2.style.display = "none";
  game_play_segment.classList.remove("hidden");
  const pick = housePick(choice);
  setTimeout(() => {
    game_play_segment_2.insertAdjacentHTML("beforeend", house_pick_html(pick));

    if (player_choice === pick) {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "Draw Match";
    } else if (pick === "scissors") {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "You Loose";
      player_score = player_score - 1;
    } else if (pick === "rock") {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "You Win";
      player_score += 1;
    }
    player_score_text.innerHTML = player_score;
  }, 4000);
});

//2. When Rock Clicked
p_rock.addEventListener("click", (e) => {
  e.preventDefault();
  game_layout.style.backgroundImage = "none";
  player_choice = choice[0];
  game_play_segment_1.insertAdjacentHTML(
    "beforeend",
    player_pick_html(player_choice)
  );
  game_segment_1.style.display = "none";
  game_segment_2.style.display = "none";
  game_play_segment.classList.remove("hidden");
  const pick = housePick(choice);
  setTimeout(() => {
    game_play_segment_2.insertAdjacentHTML("beforeend", house_pick_html(pick));

    if (player_choice === pick) {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "Draw Match";
    } else if (pick === "scissors") {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "You Win";
      player_score += 1;
    } else if (pick === "paper") {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "You Loose";
      player_score -= 1;
    }
    player_score_text.innerHTML = player_score;
  }, 2000);
});

//3. When Scissors Clicked

p_scissor.addEventListener("click", (e) => {
  e.preventDefault();
  game_layout.style.backgroundImage = "none";
  player_choice = choice[2];
  game_play_segment_1.insertAdjacentHTML(
    "beforeend",
    player_pick_html(player_choice)
  );
  game_segment_1.style.display = "none";
  game_segment_2.style.display = "none";
  game_play_segment.classList.remove("hidden");
  const pick = housePick(choice);
  setTimeout(() => {
    game_play_segment_2.insertAdjacentHTML("beforeend", house_pick_html(pick));

    if (player_choice === pick) {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "Draw Match";
    } else if (pick === "paper") {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "You Win";
      player_score += 1;
    } else if (pick === "rock") {
      game_play_segment_1.style.marginRight = "0";
      game_play_result.classList.remove("hidden");
      game_play_result_text.innerHTML = "You Loose";
      player_score -= 1;
    }
    player_score_text.innerHTML = player_score;
  }, 4000);
});

//Choosing [Rock,paper,Scissors] Randomly
const housePick = (choice) => {
  const random_pick = Math.floor(Math.random() * choice.length);
  const item = choice[random_pick];
  return item;
};

// Pick of House: Render
const house_pick_html = (pick) => {
  return `
    <div class="game__play--segment-2--${pick}">
        <div class="game__play--segment-2--${pick}--container">
           <img src="images/icon-${pick}.svg" alt="${pick} Image" class="game__play--segment-2--${pick}--container--img">
        </div>
    </div>
    `;
};




//Pick of Player:Render
const player_pick_html = (pick) => {
  return `
    <div class="game__play--segment-1--${pick}">
        <div class="game__play--segment-1--${pick}--container">
            <img src="images/icon-${pick}.svg" alt="${pick} Image" class="game__segment-1--${pick}--container--img">
        </div>
    </div>
    `;
};