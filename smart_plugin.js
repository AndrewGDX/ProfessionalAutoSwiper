var COOLDOWN = 2000;
var RANDOM_RANGE = 2000;
var MAX_AGE = 23;

console.log("Plugin loaded");

var startScript = function() {
	var YES_BTN = document.querySelector("#c-1560500889 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button");
	var NO_BTN = document.querySelector("#c-1560500889 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-nope-default\\) > button");
	var count = 1;

	if (YES_BTN == null || NO_BTN == null) {
		console.log("Buttons not found");
	    setTimeout(startScript, 2000);
	    return;
	}

	console.log("Plugin started");

	var like = function() {
		var NO_USERS = document.querySelector("#q554704800 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(100px\\).Ta\\(c\\).Px\\(28px\\).Fz\\(\\$s\\).C\\(\\$c-secondary\\) > div");
		if (NO_USERS != null) {
			console.log("Plugin stopped");
			setTimeout(() => location.reload(), 60000);
			return;
		}

		var AGE = document.querySelector("#c-1560500889 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Toa\\(n\\).Bdbw\\(--recs-gamepad-height\\).Bdbc\\(t\\).Bdbs\\(s\\).Bgc\\(\\#000\\).Wc\\(\\$transform\\).Prs\\(1000px\\).Bfv\\(h\\).Ov\\(h\\).W\\(100\\%\\).StretchedBox.Bdrs\\(8px\\) > div.Pos\\(a\\).D\\(f\\).Jc\\(sb\\).C\\(\\#fff\\).Ta\\(start\\).W\\(100\\%\\).Ai\\(fe\\).B\\(0\\).P\\(8px\\)--xs.P\\(16px\\).P\\(20px\\)--l.Cur\\(p\\).focus-button-style > div > div.Pos\\(a\\).Fz\\(\\$l\\).B\\(0\\).Trsdu\\(\\$fast\\).Maw\\(80\\%\\).D\\(f\\).Fxd\\(c\\) > div > span:nth-child(3)");
		if (AGE != null && AGE.textContent != null && AGE.textContent > MAX_AGE) {
			NO_BTN.click();
			console.log("Max age exceeded (" + AGE.textContent + ")");
    		setTimeout(like, COOLDOWN + Math.floor(Math.random() * Math.floor(RANDOM_RANGE)));
		} else {
			YES_BTN.click();
			console.log("Liked " + count++);
		    setTimeout(like, COOLDOWN + Math.floor(Math.random() * Math.floor(RANDOM_RANGE)));
		}
	};

	like();
}

setTimeout(startScript, 8000);
