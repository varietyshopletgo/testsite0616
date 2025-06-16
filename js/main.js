gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll(".animate").forEach(element => {
            gsap.fromTo(element, 
                { opacity: 0, y: 50 },  // 初期状態（透明 & 下に 50px）
                { 
                    opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",  // 画面の80%に来たら開始
                        toggleActions: "play none none reset",  // 画面外に出たらリセット
                    }
                }
            );
        });

  function toggleAccordion(header) {
	const item = header.parentElement;
	const content = item.querySelector('.accordion-content');
	const toggle = item.querySelector('.toggle');
	const isOpen = item.classList.contains('open');

	// 他のアコーディオンを閉じる
	document.querySelectorAll('.accordion-item').forEach(i => {
		if (i !== item) {
			i.classList.remove('open');
		}
	});

	// クリックしたアコーディオンを開閉
	if (isOpen) {
		item.classList.remove('open');
	} else {
		item.classList.add('open');
	}
}