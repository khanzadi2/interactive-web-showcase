 // Sample NFT data
        const nftData = [
            { name: "Cyber Punk #001", price: "2.5", category: "Art" },
            { name: "Digital Warrior #042", price: "1.8", category: "Gaming" },
            { name: "Neon Ghost #128", price: "3.2", category: "Art" },
            { name: "Matrix Runner #256", price: "4.1", category: "Gaming" },
            { name: "Tech Samurai #512", price: "2.9", category: "Art" },
            { name: "Code Breaker #789", price: "1.5", category: "Gaming" },
            { name: "Hologram Knight #1024", price: "5.7", category: "Art" },
            { name: "Data Miner #2048", price: "3.8", category: "Gaming" }
        ];

        let currentCategory = 'All';
        let displayedNFTs = 8;

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderNFTs();
        });

        // Connect wallet function
        function connectWallet() {
            alert('Wallet connection feature would be implemented here');
        }

        // Scroll to collection section
        function scrollToCollection() {
            document.getElementById('collection').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Filter NFTs by category
        function filterCategory(category) {
            currentCategory = category;
            displayedNFTs = 8;
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderNFTs();
        }

        // Render NFTs based on current category and count
        function renderNFTs() {
            const grid = document.getElementById('nft-grid');
            grid.innerHTML = '';
            
            let filteredNFTs = nftData;
            if (currentCategory !== 'All') {
                filteredNFTs = nftData.filter(nft => nft.category === currentCategory);
            }
            
            const nftsToShow = filteredNFTs.slice(0, displayedNFTs);
            
            nftsToShow.forEach((nft, index) => {
                const nftCard = document.createElement('div');
                nftCard.className = 'nft-card';
                nftCard.innerHTML = `
                    <div class="nft-image">
                        <div class="nft-image-placeholder">
                            <div class="nft-image-icon"></div>
                        </div>
                    </div>
                    <div class="nft-name">${nft.name}</div>
                    <div class="nft-price">${nft.price} ETH</div>
                `;
                grid.appendChild(nftCard);
            });
        }

        // Load more NFTs
        function loadMoreNFTs() {
            displayedNFTs += 4;
            renderNFTs();
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add some interactive effects
        document.querySelectorAll('.nft-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });