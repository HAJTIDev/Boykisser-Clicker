Game.registerMod("imsuchasillyboykisser",{
	init:function(){		
		Game.Notify(`Boykisser mod loaded!`,`Now you can kiss boysssss :3`,[30,8]);
		this.buttonClicks=0;

		l('storeTitle').insertAdjacentHTML('beforeend','<a style="font-size:12px;position:absolute;bottom:2px;right:2px;display:block;" class="smallFancyButton" id="storeClicker"></a>');
		this.updateScore();

		let MOD=this;

		AddEvent(l('storeClicker'),'click',function(){
			PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.5);
			MOD.buttonClicks+=1;
			MOD.updateScore();
			if (MOD.buttonClicks%20==0 && MOD.buttonClicks>0) Game.Notify(choose([`Splendid!`,`Keep going!`,`Amazing!`,`Incredible!`,`Outstanding!`]),'',0,2);
		});
		
		Game.registerHook('reset',function(hard){
			if (hard)
			{
				MOD.buttonClicks=0;
				MOD.updateScore();
			}
		});
		Game.Loader.Replace('buildings.png',this.dir+'/meow.png');
		Game.Loader.Replace('perfectCookie.png',this.dir+'/boykissser.png');
		Game.Loader.Replace('cursor.png',this.dir+'/cursorr.png');
		Game.Loader.Replace('goldCookie.png',this.dir+'/kawaiiCookie.png');
		Game.Loader.Replace('grandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('grandma2.png',this.dir+'/grandma.png');
		Game.Loader.Replace('witchGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('alternateGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('antiGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('transmutedGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('templeGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('workerGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('minerGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('bankGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('bunnyGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('cosmicGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('farmerGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('elfGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('alteredGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('cosmicGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('emetaGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('cloneGrandma.png',this.dir+'/grandma.png');
		Game.Loader.Replace('farm.png',this.dir+'/meow.png');

	},
	save:function(){

		return String(this.buttonClicks);
	},
	load:function(str){
		this.buttonClicks=parseInt(str||0);
		this.updateScore();
	},
	updateScore:function()
	{
		l('storeClicker').innerHTML='Click me!<br>'+Beautify(this.buttonClicks);
	},
});