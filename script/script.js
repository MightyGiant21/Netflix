let what_is_netflix_plus = document.querySelector("#what-is-netflix-plus")
let netflix_cost_plus = document.querySelector("#netflix-cost-plus")
let where_to_watch_plus = document.querySelector("#where-to-watch-plus")
let how_to_cancel_plus = document.querySelector("#how-to-cancel-plus")
let what_to_watch_plus = document.querySelector("#what-to-watch-plus")
let good_for_kids_plus = document.querySelector("#good-for-kids-plus")

let what_is_netflix = document.querySelector("#what-is-netflix")
let netflix_cost = document.querySelector("#netflix-cost")
let where_to_watch = document.querySelector("#where-to-watch")
let how_to_cancel = document.querySelector("#how-to-cancel")
let what_to_watch = document.querySelector("#what-to-watch")
let good_for_kids = document.querySelector("#good-for-kids")


what_is_netflix_plus.addEventListener('click', changePlusSign, { what_is_netflix_plus });
netflix_cost_plus.addEventListener('click', changePlusSign, { netflix_cost_plus });
where_to_watch_plus.addEventListener('click', changePlusSign, { where_to_watch_plus });
how_to_cancel_plus.addEventListener('click', changePlusSign, { how_to_cancel_plus });
what_to_watch_plus.addEventListener('click', changePlusSign, { what_to_watch_plus });
good_for_kids_plus.addEventListener('click', changePlusSign, { good_for_kids_plus });


function changePlusSign() {
    this.style.transform = 'rotate(45deg)';
}