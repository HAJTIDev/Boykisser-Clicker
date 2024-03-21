Game.registerMod("imsuchasillyboykisser",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		
		//writing mods for Cookie Clicker may require a decent understanding of javascript.
		//dig around in the game files and look for "main.js", almost the entire source code is in there including further mod hook instructions and more examples! search for "MODDING API".
		
		Game.Notify(`Boykisser mod loaded!`,`Now you can kiss boysssss :3`,[30,8]);
		
		//this mod adds the very silly functionality of letting you click a little button next to the Store header to increase a number displayed on it.
		//how anyone could find this kind of idle clicking fun is beyond us, but this is just an example.
		
		this.buttonClicks=0;//"this" refers to this mod; we're declaring a variable local to this mod. Other mods could access it with Game.mods["cooler sample mod"].buttonClicks
		
		//create the button inside the Store div
		l('storeTitle').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;bottom:2px;right:2px;display:block;" class="smallFancyButton" id="storeClicker"></a>');
		this.updateScore();
		
		//we declare "MOD" as a proxy for "this", since inside other functions and events "this" no longer refers to this mod but to the functions or events themselves!
		let MOD=this;
		
		//this attaches a click detector to our button
		AddEvent(l('storeClicker'),'click',function(){
			PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
			MOD.buttonClicks+=1;
			MOD.updateScore();
			//this displays a random message for 2 seconds for every 20 clicks on our button
			if (MOD.buttonClicks%20==0 && MOD.buttonClicks>0) Game.Notify(choose([`Splendid!`,`Keep going!`,`Amazing!`,`Incredible!`,`Outstanding!`]),'',0,2);
		});
		
		//this registers a hook that triggers on game reset
		//we use this to reset the mod's buttonClicks variable (but only in a hard reset)
		Game.registerHook('reset',function(hard){
			if (hard)
			{
				MOD.buttonClicks=0;
				MOD.updateScore();
			}
		});
		
		//to finish off, we're replacing the big cookie picture with a cool cookie, why not (the image is in this mod's directory)
		Game.Loader.Replace('perfectCookie.png',this.dir+'/boykissser.png');
		Game.Loader.Replace('cursor.png',this.dir+'/cursor.png');
		Game.Loader.Replace('goldCookie.png',this.dir+'/kawaiiCookie.png');
	},
	save:function(){
		//use this to store persistent data associated with your mod
		//note: as your mod gets more complex, you should consider storing a stringified JSON instead
		return String(this.buttonClicks);
	},
	load:function(str){
		//do stuff with the string data you saved previously
		this.buttonClicks=parseInt(str||0);
		this.updateScore();
	},
	updateScore:function()
	{
		//this is not a standard mod hook - it's a custom function we're defining for ease of use; it simply sets the text on our button to reflect the current number of clicks
		l('storeClicker').innerHTML='Click me!<br>'+Beautify(this.buttonClicks);
	},
});