"use strict";

(function initializeLegacyLogin() {
  const ENV_ID = "sonseducation-d5glzge0b6d2738d4";
  const REGION = "ap-shanghai";
  const ACCESS_KEY = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjlkMWRjMzFlLWI0ZDAtNDQ4Yi1hNzZmLWIwY2M2M2Q4MTQ5OCJ9.eyJpc3MiOiJodHRwczovL3NvbnNlZHVjYXRpb24tZDVnbHpnZTBiNmQyNzM4ZDQuYXAtc2hhbmdoYWkudGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tIiwic3ViIjoiYW5vbiIsImF1ZCI6InNvbnNlZHVjYXRpb24tZDVnbHpnZTBiNmQyNzM4ZDQiLCJleHAiOjQwODk0NDAxNDcsImlhdCI6MTc4NTc1Njk0Nywibm9uY2UiOiI5R3oyeGFESFJUSzBmSkxkUXExNF9nIiwiYXRfaGFzaCI6IjlHejJ4YURIUlRLMGZKTGRRcTE0X2ciLCJuYW1lIjoiQW5vbnltb3VzIiwic2NvcGUiOiJhbm9ueW1vdXMiLCJwcm9qZWN0X2lkIjoic29uc2VkdWNhdGlvbi1kNWdsemdlMGI2ZDI3MzhkNCIsIm1ldGEiOnsicGxhdGZvcm0iOiJQdWJsaXNoYWJsZUtleSJ9LCJ1c2VyX3R5cGUiOiIiLCJjbGllbnRfdHlwZSI6ImNsaWVudF91c2VyIiwiaXNfc3lzdGVtX2FkbWluIjpmYWxzZX0.A9VuDHB_a4AI7acLU9Ksuscox8J53XVk97HkrALtiZMwbwNWDI22r3Fa-vFlbqNhbzc7cDfyKR-qorjztslgEmvYgvLIYCirqK5zdPMTB3gEb_fgbmJN8AxXyUeIfK7yuMpcX5jT0KLn3EY95m-bUpPnBOkt-HFXR223SsG4G3cmkFpn9iYHrKRWOjKm9HbnMOdl_2A-0GbrbWTZxQOfsLILQdFr0XWEhHx6o0odvSnrmfT5zgOtiVNNbTp8bPXGLlGyHLsnW7Vnit0FQLZ86RUin6O2FQJS7J6HMjfknzUog41fMYRFtcQvtMxR9S5vKejm0ERqicFuI7qxld1tVg";
  const USERNAME_KEY = "nce1-grammar-last-username";
  const form = document.getElementById("cloudLoginForm");
  const usernameInput = document.getElementById("cloudUsername");
  const passwordInput = document.getElementById("cloudPassword");
  const message = document.getElementById("cloudAuthMessage");
  const status = document.getElementById("cloudSyncStatus");
  const dot = document.getElementById("cloudSyncDot");
  const logout = document.getElementById("cloudLogout");
  const syncNow = document.getElementById("cloudSyncNow");

  function setMessage(text) {
    message.textContent = text;
  }

  function setStatus(text, tone) {
    status.textContent = text;
    dot.classList.toggle("online", tone === "online");
    dot.classList.toggle("error", tone === "error");
  }

  function extractUser(response) {
    return response?.data?.user || response?.user || response?.data || null;
  }

  function extractSession(response) {
    return response?.data?.session || response?.session || response?.data || null;
  }

  function isNamedUser(user, session) {
    if (!user || !session || user.is_anonymous || user.isAnonymous) return false;
    return String(session.loginType || session.login_type || "").toUpperCase() !== "ANONYMOUS";
  }

  function userIdOf(user) {
    return user?.id || user?.uid || user?._id || "";
  }

  function emit(name, detail) {
    let event;
    try {
      event = new CustomEvent(name, { detail });
    } catch (error) {
      event = document.createEvent("CustomEvent");
      event.initCustomEvent(name, false, false, detail);
    }
    window.dispatchEvent(event);
  }

  function rememberUsername(username) {
    try {
      localStorage.setItem(USERNAME_KEY, username);
    } catch (error) {
      // Login remains available when storage is restricted.
    }
  }

  function authenticate(user, username) {
    const identity = { userId: userIdOf(user), username };
    window.NCE_LEGACY_IDENTITY = identity;
    document.body.classList.remove("auth-locked");
    form.hidden = true;
    logout.hidden = false;
    syncNow.hidden = true;
    passwordInput.value = "";
    setMessage("");
    setStatus(`${username} · 已登录，本机保存`, "online");
    emit("nce-legacy-authenticated", identity);
  }

  async function start() {
    if (!window.cloudbase) throw new Error("学习机核心脚本未加载");
    const app = window.cloudbase.init({ env: ENV_ID, region: REGION, accessKey: ACCESS_KEY });
    const auth = typeof app.auth === "function" ? app.auth() : app.auth;
    if (!auth || typeof auth.signInWithPassword !== "function") {
      throw new Error("学习机认证脚本未加载");
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value;
      if (!username || !password) return;
      const button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      setMessage("正在验证学生账号…");
      setStatus("正在连接登录服务…");
      try {
        const response = await auth.signInWithPassword({ username, password });
        if (response?.error) throw response.error;
        const user = extractUser(response);
        const session = extractSession(response);
        if (!isNamedUser(user, session)) throw new Error("未获得有效的学生登录状态");
        rememberUsername(username);
        authenticate(user, username);
      } catch (error) {
        setMessage(error?.message || "登录失败，请截图此提示。");
        setStatus("登录失败", "error");
      } finally {
        button.disabled = false;
      }
    });

    logout.addEventListener("click", async () => {
      try {
        await auth.signOut();
      } catch (error) {
        // Local sign-out still completes.
      }
      window.NCE_LEGACY_IDENTITY = null;
      document.body.classList.add("auth-locked");
      form.hidden = false;
      logout.hidden = true;
      emit("nce-legacy-signed-out", null);
      setStatus("登录后进入课程");
    });

    window.NCE_LOGIN_READY = true;
    form.setAttribute("data-login-ready", "true");
    setMessage("学习机兼容登录组件已启动。");
    setStatus("学习机兼容登录已就绪");

    try {
      const sessionResponse = await auth.getSession();
      const session = extractSession(sessionResponse);
      if (!session) return;
      const userResponse = await auth.getUser();
      const user = extractUser(userResponse);
      if (!isNamedUser(user, session)) return;
      const username = user?.username || "学生";
      authenticate(user, username);
    } catch (error) {
      // A stale session should not block manual login.
    }
  }

  start().catch((error) => {
    setMessage(error?.message || "学习机登录组件启动失败，请截图此提示。");
    setStatus("登录组件启动失败", "error");
  });
})();
