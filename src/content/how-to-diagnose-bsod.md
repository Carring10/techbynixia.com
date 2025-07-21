---
title: "How to Diagnose a Blue Screen of Death (BSOD) on Windows: A Beginner-Friendly Guide"
image: "/images/blue-screen-of-death.avif"
date: "07-18-2025"
slug: "how-to-diagnose-bsod"
---

# How to Diagnose a Blue Screen of Death (BSOD) on Windows: 
## A Beginner-Friendly Guide

![Blue Screen of Death](/images/blue-screen-of-death.avif)

## What Is the Blue Screen of Death?

A **Blue Screen of Death (BSOD)** appears when your Windows PC encounters a **critical system error** it cannot safely recover from. The screen turns blue, displays a STOP code, and often restarts your machine. It happens as a way to prevent further damage and data loss.

**Good news:** This issue is common and often fixable without deep technical knowledge. In this guide, you’ll learn how to **diagnose and fix a blue screen error** step by step.

---

## What Causes a BSOD?

Before you can fix the blue screen, you need to understand what causes it. A BSOD can be triggered by a range of problems. Here are the **most common causes of BSOD errors**:

- Faulty hardware (RAM, SSD, etc.)
- Corrupt or outdated device drivers
- Software conflicts or bad Windows updates
- Malware or virus infections
- Corrupted Windows system files

---

## Step-by-Step: How to Troubleshoot a Blue Screen on Windows

Let’s walk through the essential steps to **diagnose a BSOD** and get your PC back up and running.

---

### Step 1: Write Down or Screenshot the STOP Code

When the BSOD appears:

- Write down the **STOP code** or error name
- Take a picture with your phone if the PC reboots quickly

Here are **common BSOD stop codes and what they mean**:

- **`IRQL_NOT_LESS_OR_EQUAL`**  
  Usually caused by a **faulty or incompatible driver**.

- **`PAGE_FAULT_IN_NONPAGED_AREA`**  
  Indicates **bad RAM** or a driver trying to access invalid memory.

- **`SYSTEM_THREAD_EXCEPTION_NOT_HANDLED`**  
  Often related to **graphics drivers** or other **incompatible device drivers**.

- **`KMODE_EXCEPTION_NOT_HANDLED`**  
  A **kernel-level exception**, typically caused by a **problematic driver**.

- **`CRITICAL_PROCESS_DIED`**  
  A **critical Windows system process** has unexpectedly stopped — often due to **system file corruption**.

- **`BAD_POOL_CALLER`**  
  Points to a **memory allocation issue**, commonly triggered by **antivirus software or driver conflicts**.

- **`INACCESSIBLE_BOOT_DEVICE`**  
  Windows can’t read from the **boot drive** — may occur after a **hardware change or corrupted drivers**.

- **`DPC_WATCHDOG_VIOLATION`**  
  A **timeout error**, often from **SSD or SATA controller issues** — usually fixed by **updating drivers**.


---

### Step 2: Reboot into Safe Mode

**Safe Mode** starts your system with only the essential drivers and services, isolating third-party causes.

How to enter Safe Mode:

1. Restart your PC
2. Press `F8` repeatedly as the system boots
3. From the **Advanced Boot Options** menu, choose **Safe Mode**

---

### Step 3: Check for Driver Issues

**Drivers** connect hardware to your OS. If they’re outdated or corrupted, they can cause BSODs.

#### Update Your Drivers

1. Press `Win + X` → Open **Device Manager**
2. Look for any **yellow exclamation marks**
3. Right-click → **Update Driver** or **Uninstall** and reboot

#### Roll Back a Problematic Driver

If a BSOD started after an update:

1. Open **Device Manager**
2. Right-click the device → **Properties**
3. Under the **Driver** tab → click **Roll Back Driver**

---

### Step 4: Test Your Hardware

#### Check Your RAM (Memory)

1. Press `Win` key → search **Windows Memory Diagnostic**
2. Click **Restart now and check for problems**
3. Let the scan run — it may take a while

#### Check Your Hard Drive

1. Open **Command Prompt** as administrator
2. Type: `chkdsk /f /r`
3. Press Enter → If prompted, restart your PC

- `/f` fixes errors
- `/r` finds bad sectors

---

### Step 5: Scan for Malware

Malware can corrupt system files or drivers.

1. Press `Win` → Search **Windows Security**
2. Go to **Virus & Threat Protection**
3. Click **Scan options** → Choose **Full scan**
4. Remove any threats found

---

### Step 6: Uninstall Recent Updates or Software

If the blue screen started recently:

1. Go to **Settings** → **Windows Update** → **Update History**
2. Click **Uninstall Updates**
3. Remove anything installed just before the BSOD appeared

You can also remove newly installed software via:

- `Settings` → `Apps` → `Installed Apps`

---

### Step 7: Reset or Refresh Windows (Last Resort)

If nothing else works, you may need to **reset Windows**. This is for if all else fails. Before you do this, ask yourself, "Is there anything on this computer that I would be devastated to lose?" If not, send it. I had to choose this option once, it’s not a huge deal, you’ll just have to start from scratch, but at least my files are so much more organized now.

1. Go to **Settings** → **System** → **Recovery**
2. Under **Reset this PC**, choose:
   - **Keep my files** – Reinstalls Windows but keeps your personal data
   - **Remove everything** – Wipes everything and gives you a fresh start

**Note:** Back up anything important before resetting.

---

## Final Tips for Preventing BSODs

- Keep drivers and Windows updated
- Regularly scan for malware
- Avoid installing unknown or unverified software
- Make sure hardware components are properly seated and compatible

---

## Related Questions People Often Ask

If you’re still troubleshooting your PC, here are some common topics users also look for:

- How to fix a blue screen on Windows 10 or 11
- What does the IRQL_NOT_LESS_OR_EQUAL error mean?
- How to troubleshoot STOP codes in Windows
- Fixing BSODs caused by outdated drivers
- Solutions when Windows keeps crashing randomly
- Understanding common Blue Screen error codes
- Why your computer keeps blue screening and how to stop it

---
