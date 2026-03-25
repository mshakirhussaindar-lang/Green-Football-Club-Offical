     // Junior Players Data
    
        const grid = document.getElementById('squadGrid');

        // Render Players
        function renderPlayers(list) {
            grid.innerHTML = '';
            list.forEach(p => {
                const card = document.createElement('div');
                card.classList.add('player-card-wrapper');
                
                card.innerHTML = `
                    <div class="number-badge">#${p.num}</div>
                    ${p.captain ? '<div class="captain"><i class="fas fa-crown"></i> Captain</div>' : ''}
                    <div class="player-card">
                        <div class="player-photo">
                            <img src="${p.img}" alt="${p.name}">
                        </div>
                        <div class="player-name">${p.name}</div>
                        <div class="player-role">${p.role} · ${p.academy}</div>
                        <div class="player-meta">
                            <span><i class="fas fa-calendar-alt"></i> ${p.age}</span>
                            <span><i class="fas fa-flag"></i> ${p.nat}</span>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Filter Players
        function filterPlayers(pos, btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (pos === 'ALL') {
                renderPlayers(juniorPlayers);
            } else {
                renderPlayers(juniorPlayers.filter(p => p.pos === pos));
            }
        }

        // Navbar scroll hide/show effect
        let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');

        if (navbar) {
            window.addEventListener('scroll', function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop && scrollTop > 50) {
                    navbar.classList.add('hide');
                } else {
                    navbar.classList.remove('hide');
                }
                
                lastScrollTop = scrollTop;
            });
        }

        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');

        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => {
                mobileMenu.classList.toggle('show');
                const icon = hamburger.querySelector('i');
                if (mobileMenu.classList.contains('show')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('show');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                });
            });
        }

        // Initial render
        renderPlayers(juniorPlayers);