// Input elements
const inputs = {
    name: document.getElementById('input-name'),
    role: document.getElementById('input-role'),
    desc: document.getElementById('input-desc'),
    phone: document.getElementById('input-phone'),
    email: document.getElementById('input-email'),
    website: document.getElementById('input-website'),
    webUrl: document.getElementById('input-web-url'),
    location: document.getElementById('input-location'),
    linkedin: document.getElementById('input-linkedin'),
    flex: document.getElementById('input-flex'),
    confidential: document.getElementById('input-confidential'),
    footerCompany: document.getElementById('input-footer-company'),
    footerUrl: document.getElementById('input-footer-url'),
    checkLinkedin: document.getElementById('check-linkedin'),
    checkDesc: document.getElementById('check-desc')
};

// Target elements
const previewArea = document.getElementById('preview-area');
const codeOutput = document.getElementById('code-output');
const codeWrapper = document.getElementById('code-wrapper');
const copyBtn = document.getElementById('copy-btn');
const downloadBtn = document.getElementById('download-btn');
const viewCodeBtn = document.getElementById('view-code-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

// State for Team Selection
const teamSelect = {
    container: document.getElementById('team-custom-select'),
    trigger: document.getElementById('team-trigger'),
    options: document.getElementById('team-options'),
    currentValue: 'https://i.ibb.co.com/Y7ybwrCZ/Kazi-Hussain.jpg',
    currentName: 'Kaji Hussain'
};

// --- Custom Select Handling ---
teamSelect.trigger.addEventListener('click', () => {
    teamSelect.container.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!teamSelect.container.contains(e.target)) {
        teamSelect.container.classList.remove('open');
    }
});

const teamOptionElements = document.querySelectorAll('.option');
teamOptionElements.forEach(opt => {
    opt.addEventListener('click', () => {
        const val = opt.getAttribute('data-value');
        const name = opt.textContent.trim();
        const title = opt.getAttribute('data-title');
        const img = opt.querySelector('img') ? opt.querySelector('img').src : val;

        // Update UI Trigger
        teamSelect.trigger.querySelector('img').src = img;
        teamSelect.trigger.querySelector('span').innerText = name;
        
        // Update State
        teamSelect.currentValue = val;
        teamSelect.currentName = name;
        
        // Sync Inputs
        inputs.name.value = name;
        if (title) inputs.role.value = title;

        // Visual feedback
        teamOptionElements.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');

        teamSelect.container.classList.remove('open');
        updateSignature();
    });
});

// --- Tab Switching Logic ---
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
            if (pane.id === `tab-${tabId}`) pane.classList.add('active');
        });
    });
});

// --- Code View Toggle ---
viewCodeBtn.addEventListener('click', () => {
    if (codeWrapper.style.display === 'none') {
        codeWrapper.style.display = 'block';
        viewCodeBtn.classList.add('active-btn');
    } else {
        codeWrapper.style.display = 'none';
        viewCodeBtn.classList.remove('active-btn');
    }
});

function generateSignatureHTML() {
    return `<table cellpadding="0" cellspacing="0" border="0" style="width:500px;max-width:500px;border-collapse:collapse;font-family:Outfit,Arial,Helvetica,sans-serif;border-top:4px solid #111111;">
    <tr><td style="padding:24px 26px 18px 26px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
            <tr>
                <td width="86" valign="middle" style="padding-right:16px;">
                    <img src="${teamSelect.currentValue}" width="72" height="72" alt="${inputs.name.value}" style="display:block;border:3px solid #111111;border-radius:50%;">
                </td>
                <td valign="middle">
                    <div style="font-family:Outfit,Arial,sans-serif;font-size:26px;line-height:1.1;font-weight:700;color:#0d0d0d;letter-spacing:-0.3px;margin:0 0 5px 0;">${inputs.name.value}</div>
                    <div style="font-family:Outfit,Arial,sans-serif;font-size:11px;font-weight:600;color:#555555;text-transform:uppercase;letter-spacing:1.3px;margin:0 0 3px 0;">${inputs.role.value}</div>
                    ${inputs.checkDesc.checked ? `<div style="font-family:Outfit,Arial,sans-serif;font-size:10px;font-weight:400;color:#aaaaaa;text-transform:uppercase;letter-spacing:1.2px;margin:0;">${inputs.desc.value}</div>` : ''}
                </td>
                <td width="94" valign="middle" align="right">
                    <img src="https://i.ibb.co.com/qLJfy4qt/KMG-New-Logo.png" width="82" alt="Logo" style="display:block;border:0;">
                </td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
            <tr><td style="padding:16px 0 13px 0;"><div style="height:2px;line-height:2px;font-size:2px;background:#111111;">&nbsp;</div></td></tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr><td style="padding:5px 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>
                    <td valign="middle" style="padding-right:11px;">
                        <table cellpadding="0" cellspacing="0" border="0"><tr>
                            <td width="28" height="28" align="center" valign="middle" style="background:#111111;border-radius:6px;">
                                <img src="https://img.icons8.com/ios-glyphs/16/ffffff/phone.png" width="13" height="13" alt="" style="display:block;border:0;">
                            </td></tr></table>
                    </td>
                    <td valign="middle" style="font-family:Outfit,Arial,sans-serif;font-size:13px;font-weight:400;line-height:18px;color:#222222;">
                        <a href="tel:${inputs.phone.value}" style="color:#222222;text-decoration:none;">${inputs.phone.value}</a>
                    </td></tr></table>
            </td></tr>
            <tr><td style="padding:5px 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>
                    <td valign="middle" style="padding-right:11px;">
                        <table cellpadding="0" cellspacing="0" border="0"><tr>
                            <td width="28" height="28" align="center" valign="middle" style="background:#111111;border-radius:6px;">
                                <img src="https://img.icons8.com/ios-glyphs/16/ffffff/new-post.png" width="13" height="13" alt="" style="display:block;border:0;">
                            </td></tr></table>
                    </td>
                    <td valign="middle" style="font-family:Outfit,Arial,sans-serif;font-size:13px;font-weight:400;line-height:18px;color:#222222;">
                        <a href="mailto:${inputs.email.value}" style="color:#222222;text-decoration:none;">${inputs.email.value}</a>
                    </td></tr></table>
            </td></tr>
            <tr><td style="padding:5px 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>
                    <td valign="middle" style="padding-right:11px;">
                        <table cellpadding="0" cellspacing="0" border="0"><tr>
                            <td width="28" height="28" align="center" valign="middle" style="background:#111111;border-radius:6px;">
                                <img src="https://img.icons8.com/ios-glyphs/16/ffffff/domain.png" width="13" height="13" alt="" style="display:block;border:0;">
                            </td></tr></table>
                    </td>
                    <td valign="middle" style="font-family:Outfit,Arial,sans-serif;font-size:13px;font-weight:700;line-height:18px;">
                        <a href="${inputs.webUrl.value}" style="color:#111111;text-decoration:none;font-weight:700;border-bottom:1.5px solid #111111;">${inputs.website.value}</a>
                    </td></tr></table>
            </td></tr>
            <tr><td style="padding:5px 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>
                    <td valign="middle" style="padding-right:11px;">
                        <table cellpadding="0" cellspacing="0" border="0"><tr>
                            <td width="28" height="28" align="center" valign="middle" style="background:#111111;border-radius:6px;">
                                <img src="https://img.icons8.com/ios-glyphs/16/ffffff/marker.png" width="13" height="13" alt="" style="display:block;border:0;">
                            </td></tr></table>
                    </td>
                    <td valign="middle" style="font-family:Outfit,Arial,sans-serif;font-size:13px;font-weight:400;line-height:18px;color:#888888;">${inputs.location.value}</td>
                </tr></table>
            </td></tr>
            ${inputs.checkLinkedin.checked ? `<tr><td style="padding:8px 0 4px 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>
                    <td style="background:#111111;border-radius:7px;padding:7px 15px;">
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>
                            <td valign="middle" style="padding-right:9px;">
                                <img src="https://img.icons8.com/ios-glyphs/16/ffffff/linkedin.png" width="13" height="13" alt="" style="display:block;border:0;">
                            </td>
                            <td valign="middle">
                                <a href="${inputs.linkedin.value}" style="font-family:Outfit,Arial,sans-serif;color:#ffffff;font-size:12.5px;font-weight:600;text-decoration:none;">Connect on LinkedIn</a>
                            </td></tr></table>
                    </td></tr></table>
            </td></tr>` : ''}
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
            <tr><td style="padding:15px 0 12px 0;"><div style="height:1px;line-height:1px;font-size:1px;background:#e0e0e0;">&nbsp;</div></td></tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
            <tr><td style="border-left:3px solid #111111;padding-left:11px;font-family:Outfit,Arial,sans-serif;font-size:11px;font-weight:300;font-style:italic;line-height:17px;color:#888888;">
                ${inputs.flex.value}
            </td></tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
            <tr><td style="padding-top:12px;font-family:Outfit,Arial,sans-serif;font-size:9.5px;font-weight:300;line-height:15px;color:#bbbbbb;">
                ${inputs.confidential.value}
            </td></tr>
        </table>
    </td></tr>
    <tr><td style="background:#111111;padding:9px 26px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;"><tr>
            <td style="font-family:Outfit,Arial,sans-serif;font-size:10px;font-weight:400;color:#ffffff;text-transform:uppercase;letter-spacing:1px;">${inputs.footerCompany.value}</td>
            <td align="right" style="font-family:Outfit,Arial,sans-serif;font-size:10px;font-weight:400;color:#ffffff;">${inputs.footerUrl.value}</td>
        </tr></table>
    </td></tr>
</table>`;
}

function updateSignature() {
    const html = generateSignatureHTML();
    previewArea.innerHTML = html;
    codeOutput.textContent = html;
}

// Add event listeners to all regular inputs
Object.values(inputs).forEach(input => {
    const eventType = (input.type === 'checkbox') ? 'change' : 'input';
    input.addEventListener(eventType, updateSignature);
});

// Copy HTML button
copyBtn.addEventListener('click', () => {
    const html = generateSignatureHTML();
    navigator.clipboard.writeText(html).then(() => {
        const tooltip = copyBtn.querySelector('.tooltiptext');
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        setTimeout(() => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }, 2000);
    });
});

// Download button
downloadBtn.addEventListener('click', () => {
    const htmlSnippet = generateSignatureHTML();
    const fullHTML = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${htmlSnippet}</body></html>`;
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email-signature.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Initial update
updateSignature();
