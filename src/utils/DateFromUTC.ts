export function dateFromUTC( utc : number): string {
    const date = new Date(utc * 1000); 

    return date.toLocaleString("en-US", {
        month: "short",  
        day: "numeric",  
        hour: "numeric", 
        minute: "2-digit",
        hour12: false, 
    });
}

export function hourFromUTC( utc : number): string {
    const date = new Date(utc * 1000); 

    return date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: false, 
    });
}
