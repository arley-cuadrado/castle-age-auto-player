# Player Recon #

This is my attempt to put all information about the Player Recon function into one place.

What is Player Recon?
Recon mode lets CAAP scan your battle pages during Idle time to build a list of players (your own personal Hitlist of Userids) that meet the criteria you input here:

![http://i791.photobucket.com/albums/yy199/stallionltd/recon.jpg](http://i791.photobucket.com/albums/yy199/stallionltd/recon.jpg)

Alot is self explanitory for setting it up.
<ol>
<li>First you determine how low below your current rank you want Recon to scan for.<br>
Put this value in 'Not Lower Than Rank Minus'<br>
If you are Rank 19 Prince and you put in 3, it will look for <br /><br />
Rank 16 - Baron's<br />
Rank 17 - Earl's<br />
Rank 18 - Duke's<br />
<b>Rank 19 - Prince's</b><br />
Rank 20 - King's    and<br />
Rank 21 - High King's<br />
</li><br />
<li>Next input the highest level above your current level you would like Recon to search for.<br>
If you are level 200 and dont want to fight people over level 250 enter '50' in 'Not Higher Than Level Plus'</li><br />
<li>Last input the highest relative army size you wish to search for. Input in last box</li>
</ol><br />
Now when your CAAP enters Idle mode it will start Player Recon and search for Targets.
<b>Note-</b> If you have battle when stamina available it will take you out of Recon Mode often, consider using the 'Battle When X Stamina' Option

Now, here is how you handle the data collected.

To see the list of players that Recon has found click the box next to 'Display:', switch from 'Monster' to 'Target List'

![http://i791.photobucket.com/albums/yy199/stallionltd/recondisp.jpg](http://i791.photobucket.com/albums/yy199/stallionltd/recondisp.jpg)

This will switch your dashboard from displaying monsters to the Targets in your Recon List:

![http://i791.photobucket.com/albums/yy199/stallionltd/reconlist.jpg](http://i791.photobucket.com/albums/yy199/stallionltd/reconlist.jpg) <br />
![http://i134.photobucket.com/albums/q87/mad_stallion_2006/demigif.gif](http://i134.photobucket.com/albums/q87/mad_stallion_2006/demigif.gif)
Note: the Deity Field will give you a number of 1-5. This is the Target's Demi-Point Alignment:
<ol>
<li>Ambroia / <font color='blue'>Energy</font></li>
<li>Malekus / <font color='red'>Attack</font></li>
<li>Corvintheous / <font color='#ffcc00'>Defense</font></li>
<li>Aurora / <font color='green'>Health</font></li>
<li>Azeron / <font color='grey'>Stamina</font></li>
</ol>
The rest of the fields are pretty self explanatory .

In order to use this information you need to be able to copy and paste the list into the 'Userid' box for Battle.<br />
Select all your list with the mouse and copy:<br />
![http://i791.photobucket.com/albums/yy199/stallionltd/reconcopy.jpg](http://i791.photobucket.com/albums/yy199/stallionltd/reconcopy.jpg)
<br />
<ol>
<li>Now you need a place to paste them to. If you have Excel that works, but if you dont, ill cover online spreadsheet option. Go to: <a href='http://docs.google.com'>http://docs.google.com</a> and start an account if you dont have a gmail account to sign in with.</li><br />
<li>Start a new spreadsheet</li><br />
<li>Left click in cell A1 and paste your information</li><br />
<li>Now highlight all of Row A to just copy the Userids  Note if you copy the headers from the list too, you can also use the sort utils also</li><br />
<li>Now paste either into your 'Userids' box in CAAP or in some other document for future use.</li><br />

MORE NOTES ON PLAYER RECON:<br>
The default max number of players stored in Recon Memory is 100.<br>
JohnnyA mentions "You can override this limit by defining this variable in 'about:config' and assigning it a different value. However, note that a larger list will use more Firefox resources and may impact performance."<br>
I have worked with 200 and had no problems.<br>
<br>
<b>Variable to change Max Recon Targets:</b>
Set Maximum Number Of Targets For Player Recon Target List<br /><br />
<font color='red'><code>greasemonkey.scriptvals.caap/Castle Age Autoplayer.castle_age__LimitTargets</code></font><br />
<code>Integer</code><br />
<code>Default=100</code><br /><br />
The value you supply overrides the maximum number of targets maintained in the 'targetsOL' database by Player Recon.  Currently, recon keeps the newest entries and drops the oldest entries over the maximum.<br>
<br /><br />
See my tutorial on using about:config to learn how to create and change variables:<br>
<a href='http://senses.ws/caap/index.php?topic=1096.0'>http://senses.ws/caap/index.php?topic=1096.0</a>