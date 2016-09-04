// Automatically skip any cutscene. (Includes even mainstream quest cutscenes. Use with caution.) (Created by Step29, converted from mod_sharker by C0ZIEST, fixed by Poshwosh)

var pattern = scan('?? ?? ?? 75 05 39 ?? ?? ?? ?? ?? ?? E0');
patch(pattern.add(3), 0xEB);
