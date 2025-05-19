document.addEventListener('DOMContentLoaded', () => {
    // یەکەمجار زمانی هەڵبژێردراو لە index.html وەربگرە
    let lang = localStorage.getItem('selectedLanguageForResultPage') || localStorage.getItem('selectedLanguage') || 'ku';
    
    // فانکشنی گۆڕینی زمان و ئاڕاستە (هاوشێوەی script.js بەڵام سادەتر)
    function applyLanguageAndDirection(language) {
        document.documentElement.lang = language;
        if (language === 'ar' || language === 'fa' || language === 'ku') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
            document.body.classList.remove('ltr');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.add('ltr');
            document.body.classList.remove('rtl');
        }
        // وەرگێڕانی توخمەکان
        if (typeof translations !== 'undefined' && translations[language]) {
            const currentTranslations = translations[language];
            document.title = currentTranslations.trackingDetailsTitle ? `${currentTranslations.trackingDetailsTitle} | ${currentTranslations.navBrandText}` : "Tracking Result | Baran Cargo";
            
            setTextContent('trackingResultPageTitle', currentTranslations.trackingDetailsTitle);
            setTextContent('backToHomeBtn', currentTranslations.backToHomeBtn || 'Back to Home'); // 'Back to Home' وەرگێڕە
            
            // Translate static labels
            const elements = document.querySelectorAll('.translate');
            elements.forEach(el => {
                const key = el.dataset.key;
                if (currentTranslations[key]) {
                    el.textContent = currentTranslations[key];
                }
            });
        }
    }
    
    // Initialize language
    applyLanguageAndDirection(lang);


    // نموونەی داتای تراکینگ (هەمان نموونەی پێشوو)
    const sampleTrackingData = {
        "B9874-05-0315309": { // ژمارەی تراکینگ وەک کلیل
            trackNo: "B9874-05-0315309",
            customer: "HAWRE AHMED HADI-IR",
            destination: "Erbil",
            shippingType: "By Shipping by air",
            totalPieces: "1 PCs",
            totalBoxes: "1 boxes",
            totalWeight: "11.7 KG",
            totalCBM: "0.0721 m3",
            currentStatusKey: "statusNotDelivered",
            timeline: [
                { date: "2025-05-13", time: "13:57:25", statusKey: "statusInWarehouse", details: "Received by warehouse | Guangzhou-Air", by: "Akai Wang | China", type: "completed" },
                { date: "2025-05-15", time: "10:27:12", statusKey: "statusShippedViaAir", details: "Air Freight No. | 85042 HK-ISU | HK-ISU-D40606", by: "Apple Li | China", type: "completed" },
                { date: "2025-05-19", time: "15:03:21", statusKey: "statusCustomsDeclaration", details: "Customs declaration finished | In Iraq", by: "Aveen Asker | Erbil", type: "completed" },
                { date: "2025-05-19", time: "17:20:38", statusKey: "statusInWarehouse", details: "Received by warehouse | Sulaymania", by: "Hake Sulaymaniyah", type: "completed" },
                { date: "2025-05-19", time: "17:23:57", statusKey: "statusInWarehouse", details: "Received by warehouse | Sulaymania", by: "Hake Sulaymaniyah", type: "completed" },
                { date: "2025-05-19", time: "18:04:10", statusKey: "statusShippedViaAir", details: "Air Freight No. | ISU EBL 534 | ISU - Erbil-A30527", by: "Hogir Sulamaniyah", type: "completed" },
                { date: "2025-05-23", time: "00:00:00", statusKey: "statusEstimatedDelivery", details: "2025-05-23 00:00:00", by: "", type: "estimated" }
            ],
            boxes: [
                { id: "TY49", descriptionKey: "viscometer 和设计", count: 1 }
            ]
        }
        // دەتوانیت تراکی تریش لێرە زیاد بکەیت بۆ تاقیکردنەوە
    };

    function populateTrackingPage(data) {
        const langTranslations = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : (translations ? translations.en : {});


        setTextContent('resultTrackNo', data.trackNo);
        setTextContent('resultCustomer', data.customer);
        setTextContent('resultDestination', data.destination);
        setTextContent('resultShippingType', data.shippingType);
        setTextContent('resultTotalPieces', data.totalPieces);
        setTextContent('resultTotalBoxes', data.totalBoxes);
        setTextContent('resultTotalWeight', data.totalWeight);
        setTextContent('resultTotalCBM', data.totalCBM);
        setTextContent('resultCurrentStatus', langTranslations[data.currentStatusKey] || data.currentStatusKey.replace('status',''));

        const timelineContainer = document.querySelector('.tracking-timeline');
        timelineContainer.innerHTML = ''; 

        data.timeline.forEach(item => {
            const itemStatus = langTranslations[item.statusKey] || item.statusKey.replace('status','');
            const timelineItemDiv = document.createElement('div');
            timelineItemDiv.classList.add('timeline-item');
            if (item.type === "estimated") timelineItemDiv.classList.add('estimated-step');
            else if (item.type === "current") timelineItemDiv.classList.add('current-step');
            else timelineItemDiv.classList.add('completed-step');

            timelineItemDiv.innerHTML = `
                <div class="timeline-content">
                    <div class="timeline-date">${item.date} ${item.time}</div>
                    <div class="timeline-status">${itemStatus}</div>
                    <div class="timeline-details">${item.details}</div>
                    ${item.by ? `<div class="timeline-by">By: ${item.by}</div>` : ''}
                </div>
            `;
            timelineContainer.appendChild(timelineItemDiv);
        });

        const boxesContainer = document.getElementById('resultListOfBoxes');
        boxesContainer.innerHTML = ''; 
        data.boxes.forEach(box => {
            const boxDesc = langTranslations[box.descriptionKey] || box.descriptionKey || "N/A";
            const boxItemDiv = document.createElement('div');
            boxItemDiv.classList.add('box-item');
            boxItemDiv.innerHTML = `
                <div>
                    <span class="box-id">${box.id}</span>
                    <span class="box-desc ms-2">${boxDesc}</span>
                </div>
                <span class="box-count">${box.count}</span>
            `;
            boxesContainer.appendChild(boxItemDiv);
        });
    }

    // وەرگرتنی ژمارەی تراکینگ لە URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumberFromUrl = urlParams.get('trackNo');

    if (trackingNumberFromUrl && sampleTrackingData[trackingNumberFromUrl]) {
        populateTrackingPage(sampleTrackingData[trackingNumberFromUrl]);
    } else {
        // ئەگەر ژمارەی تراکینگ نەبوو یان داتا نەدۆزرایەوە
        const timelineContainer = document.querySelector('.tracking-timeline');
        const langTranslations = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : (translations ? translations.en : {});
        
        setTextContent('resultTrackNo', trackingNumberFromUrl || (langTranslations.notFound || 'N/A'));
        setTextContent('resultCurrentStatus', langTranslations.trackingNumberNotFound || 'Tracking number not found or invalid.');
        if (timelineContainer) timelineContainer.innerHTML = `<p class="text-danger">${langTranslations.trackingNumberNotFound || 'Tracking number not found or invalid.'}</p>`;
    }
});

// Helper function (can be shared or duplicated from script.js)
function setTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}