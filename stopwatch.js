	var msec, sec, min, hr;
	var l = [], k = "";
	// var q = setTimeout();
	function start() 
	{
		// body...
		msec = ms.value;
		sec = s.value;
		min = m.value;
		hr = h.value;

		msec++;
		ms.value = msec;
		if(msec == 99)
		{
			ms.value = 0;
			sec++;
			s.value = sec;
		}
		if (sec == 60) 
		{
			s.value = 0;
			min++;
			m.value = min;
		}
		if (min == 60) 
		{
			m.value = 0;
			hr++;
			h.value = hr;
		}



		q = setTimeout(start,10);
		// if (hr == 24) 
		// {
		// 	h.value = "";
		// 	m.value = "";
		// 	s.value = "";
		// 	ms.value = "";
		// }
	}
	function lap()
	{
		// k += hr + ":" + min + ":" + ":" + sec + ":" + msec;
		// k.push(l);
		document.getElementById("div").innerHTML += h.value + ":" + m.value + ":" + s.value + ":" + ms.value + "<br>";
		// return h + m + s + ms;
		// document.getElementById("div").innerHTML = k;

	}
	function stop()
	{
		c = clearTimeout(q);

	}
	function refresh()
	{
		h.value = "";
		m.value = "";
		s.value = "";
		ms.value = "";
		div = "";
	}
	