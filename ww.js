var asal;
var tujuan;
var berat;
var tipe;


function timedCount(asal,tujuan,berat,tipe) 
{
  var diff;
  var total;
  
  if (asal > tujuan)
  {
	  diff = asal - tujuan;
  }
  else
  {
	  diff = tujuan - asal;
  }
  
  total = diff * 10000 * berat * tipe;
  postMessage(total);
  
}

self.addEventListener("message", function(e) 
{
	asal = e.data[0];
    tujuan = e.data[1];
	berat = e.data[2];
	tipe = parseFloat(e.data[3]);
	timedCount(asal,tujuan,berat,tipe);
}, false);

