import { test } from "@playwright/test";

test("Naukri Login Automation", async ({ page }) => {
  // Open Naukri website
  await page.goto("https://www.naukri.com/", { waitUntil: "domcontentloaded" });

  // Click Login button
  await page.click("//*[@id='login_Layer']");

  // Enter email and password
  await page.fill(
    "input[placeholder='Enter your active Email ID / Username']",
    "kdamit00@gmail.com"
  );

  await page.fill(
    "input[placeholder='Enter your password']",
    "LRzg943AJfr-BE3"
  );

  // Click login button
  await page.click("button[type='submit']");

  // Wait for manual captcha if it appears
  console.log("If CAPTCHA appears, solve it manually...");
  await page.waitForTimeout(5000);

  // Go to profile page
  await page.goto("https://www.naukri.com/mnjuser/profile", {
    waitUntil: "domcontentloaded",
  });

  // Wait to verify profile page opened
  await page.waitForTimeout(5000);

  console.log("Profile page opened successfully.");

  // Keep browser open for some time
  //await page.waitForTimeout(15000);
    const new_Text="."
    await page.waitForTimeout(4000)
    
    await page.mouse.wheel(0, 800);
    await page.click("//*[@id='lazyEmployment']/div/div/div/div[2]/div/div[1]/span[2]")
    await page.click("//*[@id='jobDescription']");
    //await page.keyboard.press("Control+A");
    await page.press("//*[@id='jobDescription']","End");
    await page.type("//*[@id='jobDescription']", new_Text);
    await page.keyboard.press("Backspace")
    await page.waitForTimeout(6000);
    await page.click("//*[@id='submitEmployment']")
});