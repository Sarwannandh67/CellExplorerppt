// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Cell organelle data with detailed information
    const organelleData = {
        "Nucleus": {
            description: "The control center of the cell that contains genetic material.",
            image: "https://via.placeholder.com/400x200?text=Nucleus",
            function: "Houses DNA and controls cellular activities including protein synthesis, cell division, and growth.",
            structure: "Spherical structure enclosed by a double-membrane nuclear envelope with nuclear pores. Contains chromosomes made of DNA and proteins, as well as the nucleolus.",
            facts: [
                "Contains nearly 2 meters of DNA compressed into a tiny space",
                "The nuclear envelope has thousands of pores for molecular transport",
                "The nucleus is typically the largest organelle in an animal cell"
            ]
        },
        "Mitochondria": {
            description: "The powerhouse of the cell that generates energy.",
            image: "https://via.placeholder.com/400x200?text=Mitochondria",
            function: "Produces ATP (adenosine triphosphate), the cellular energy currency, through cellular respiration.",
            structure: "Bean-shaped organelles with a double membrane. The inner membrane is folded into cristae, increasing surface area for ATP production.",
            facts: [
                "Mitochondria have their own DNA, separate from the nucleus",
                "They're believed to have originated from free-living bacteria through endosymbiosis",
                "A typical cell contains hundreds to thousands of mitochondria",
                "Mitochondrial density varies by cell type, with more energy-demanding cells having more mitochondria"
            ]
        },
        "Golgi Apparatus": {
            description: "The packaging and shipping center of the cell.",
            image: "https://via.placeholder.com/400x200?text=Golgi+Apparatus",
            function: "Modifies, sorts, and packages proteins and lipids for storage in the cell or secretion outside the cell.",
            structure: "Stack of flattened membrane-bound sacs (cisternae) with distinct entry (cis) and exit (trans) faces.",
            facts: [
                "Named after Italian scientist Camillo Golgi who discovered it in 1898",
                "Works closely with the endoplasmic reticulum in protein processing",
                "Creates lysosomes and secretory vesicles",
                "Adds sugar molecules to proteins in a process called glycosylation"
            ]
        },
        "Endoplasmic Reticulum": {
            description: "An extensive network of membranes involved in protein and lipid synthesis.",
            image: "https://via.placeholder.com/400x200?text=Endoplasmic+Reticulum",
            function: "Rough ER synthesizes proteins, while smooth ER synthesizes lipids and detoxifies substances.",
            structure: "Interconnected network of flattened sacs and tubules. Rough ER has ribosomes attached to its surface, while smooth ER lacks ribosomes.",
            facts: [
                "The rough ER gets its name from the ribosomes attached to its surface",
                "The ER forms a continuous membrane system with the nuclear envelope",
                "The smooth ER is important for calcium ion storage and regulation",
                "In liver cells, the smooth ER contains enzymes that detoxify drugs and poisons"
            ]
        },
        "Lysosome": {
            description: "Digestive organelles containing enzymes to break down waste and cellular debris.",
            image: "https://via.placeholder.com/400x200?text=Lysosome",
            function: "Breaks down waste materials, foreign particles, and damaged organelles through enzymatic digestion.",
            structure: "Membrane-bound spherical vesicles containing hydrolytic enzymes that work in an acidic environment.",
            facts: [
                "Contains about 50 different types of digestive enzymes",
                "Maintains an acidic internal pH of around 4.5-5.0",
                "Sometimes called 'suicide bags' because if damaged, they can release enzymes that digest the cell",
                "Play a key role in programmed cell death (apoptosis)"
            ]
        },
        "Ribosome": {
            description: "The protein factories of the cell.",
            image: "https://via.placeholder.com/400x200?text=Ribosome",
            function: "Synthesizes proteins according to instructions from messenger RNA (mRNA).",
            structure: "Composed of two subunits made of ribosomal RNA and proteins. Can be free in the cytoplasm or attached to the rough ER.",
            facts: [
                "The smallest organelles in the cell, measuring only about 20-30 nanometers",
                "A single cell can contain millions of ribosomes",
                "Ribosomes can work in groups called polyribosomes to produce proteins more efficiently",
                "Unlike most organelles, ribosomes are not enclosed by membranes"
            ]
        },
        "Cell Membrane": {
            description: "The protective barrier that regulates what enters and exits the cell.",
            image: "https://via.placeholder.com/400x200?text=Cell+Membrane",
            function: "Controls the movement of substances in and out of the cell, provides structure, and facilitates cell communication.",
            structure: "Phospholipid bilayer embedded with proteins, cholesterol, and carbohydrates, creating a selectively permeable barrier.",
            facts: [
                "Also called the plasma membrane or cytoplasmic membrane",
                "The fluid mosaic model describes its structure and behavior",
                "Contains receptor proteins that help cells respond to external signals",
                "Maintains cell homeostasis by regulating internal conditions"
            ]
        },
        "Cytoplasm": {
            description: "The gel-like substance filling the cell where organelles are suspended.",
            image: "https://via.placeholder.com/400x200?text=Cytoplasm",
            function: "Provides a medium for organelles and cellular reactions, stores substances, and transports materials within the cell.",
            structure: "Composed of cytosol (a water-based solution containing ions, proteins, and other molecules) and the cytoskeleton (protein filaments that provide structure).",
            facts: [
                "Makes up about 70% of the cell's volume",
                "Contains thousands of enzymes for various metabolic activities",
                "The cytoskeleton helps organelles move within the cell",
                "The consistency can change from fluid to gel-like depending on cellular conditions"
            ]
        }
    };

    // Get DOM elements
    const organelles = document.querySelectorAll('.organelle, .cell-membrane, .cytoplasm');
    const tooltip = document.querySelector('.tooltip');
    const infoPanel = document.querySelector('.info-panel');
    const closePanel = document.querySelector('.close-panel');
    const panelTitle = document.querySelector('.panel-title');
    const panelImage = document.querySelector('.panel-image');
    const panelDescription = document.querySelector('.panel-description');
    const panelStructure = document.querySelector('.panel-structure');
    const panelFacts = document.querySelector('.panel-facts');
    const tooltipTitle = document.querySelector('.tooltip-title');
    const tooltipDescription = document.querySelector('.tooltip-description');

    // Add event listeners to all organelles
    organelles.forEach(organelle => {
        // Tooltip on hover
        organelle.addEventListener('mouseenter', function(e) {
            const name = this.dataset.name;
            const data = organelleData[name];
            
            if (data) {
                tooltipTitle.textContent = name;
                tooltipDescription.textContent = data.description;
                
                // Position tooltip near the cursor
                const rect = this.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const topPosition = rect.top + scrollTop - tooltip.offsetHeight - 10;
                
                tooltip.style.top = `${topPosition}px`;
                tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
                tooltip.style.opacity = 1;
                tooltip.style.transform = 'translateY(0)';
            }
        });

        organelle.addEventListener('mouseleave', function() {
            tooltip.style.opacity = 0;
            tooltip.style.transform = 'translateY(10px)';
        });

        // Info panel on click
        organelle.addEventListener('click', function() {
            const name = this.dataset.name;
            const data = organelleData[name];
            
            if (data) {
                // Fill panel with data
                panelTitle.textContent = name;
                panelImage.src = data.image;
                panelImage.alt = name;
                panelDescription.textContent = data.function;
                panelStructure.textContent = data.structure;
                
                // Clear and repopulate facts list
                panelFacts.innerHTML = '';
                data.facts.forEach(fact => {
                    const li = document.createElement('li');
                    li.textContent = fact;
                    panelFacts.appendChild(li);
                });
                
                // Show panel
                infoPanel.classList.add('active');
                
                // Add overlay effect to body
                document.body.classList.add('panel-open');
            }
        });
    });

    // Close panel when close button is clicked
    closePanel.addEventListener('click', function() {
        infoPanel.classList.remove('active');
        document.body.classList.remove('panel-open');
    });

    // Close panel when clicking outside (optional)
    document.addEventListener('click', function(e) {
        if (infoPanel.classList.contains('active') && 
            !e.target.closest('.organelle') && 
            !e.target.closest('.cell-membrane') && 
            !e.target.closest('.cytoplasm') && 
            !e.target.closest('.info-panel')) {
            infoPanel.classList.remove('active');
            document.body.classList.remove('panel-open');
        }
    });

    // Add 3D tilt effect to cell (optional enhancement)
    const cell = document.querySelector('.cell');
    
    // Basic 3D effect on mouse move (optional)
    cell.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    cell.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header animation on scroll
    const header = document.querySelector('.glass-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.7)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.25)';
            header.style.backdropFilter = 'blur(12px)';
        }
    });
});