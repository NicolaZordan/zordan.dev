async function getMonitorData() {
    const response = await fetch(
        "https://stats.uptimerobot.com/api/getMonitorList/FSdUMJD5lz"
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
}

function getStatus(statusClass) {
    switch (statusClass) {
        case "success":
            return "OK";
        case "paused":
            return "N/A";
        default:
            return "DOWN";
    }
}

async function createEmailUTR() {
    const json = await getMonitorData();

    let body =
`I have checked the sites:

`;

    let previousPrefix = "";

    json.data.forEach(site => {
        let name = site.name;
        let prefix = "";

        if (name.includes(":")) {
            const parts = name.split(":");
            prefix = parts[0].trim();
            name = parts.slice(1).join(":").trim();
        }

        if (prefix && prefix !== previousPrefix) {
            body += `\n${prefix}\n`;
            previousPrefix = prefix;
        }

        body += `  • ${name}: ${getStatus(site.statusClass)}\n`;
    });

    const mailto =
        `mailto:Grady@dms-systems.com` +
        `?cc=${encodeURIComponent("Gregory@dms-systems.com")}` +
        `&subject=${encodeURIComponent("Checked DMS Sites")}` +
        `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
}

// Button Example
// document.getElementById("sendEmailBtn")
//     .addEventListener("click", createEmailUTR);

    