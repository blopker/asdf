import{r as e,o as s,c as a,a as n,F as l,b as o,d as t}from"./app.0e7b70bd.js";const r={},c=o('<h1 id="asdf" tabindex="-1"><a class="header-anchor" href="#asdf" aria-hidden="true">#</a> asdf</h1><p><code>asdf</code> 核心贡献指南.</p><h2 id="初始化安装" tabindex="-1"><a class="header-anchor" href="#初始化安装" aria-hidden="true">#</a> 初始化安装</h2><p>在 Github 上 fork <code>asdf</code> 并且/或者使用 Git 克隆默认分支：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># 克隆你 fork 的 asdf</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>\n<span class="line"><span style="color:#88846F;"># 或者直接克隆 asdf</span></span>\n<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>\n<span class="line"></span></code></pre></div><p>核心开发所需的工具都列举在这个存储库的 <code>.tool-versions</code> 文件中。如果你想要使用 <code>asdf</code> 自身来管理它，请使用以下命令添加这些插件：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add bats https://github.com/timgluz/asdf-bats.git</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf plugin add shellcheck https://github.com/luizm/asdf-shellcheck.git</span></span>\n<span class="line"><span style="color:#F8F8F2;">asdf plugin add shfmt https://github.com/luizm/asdf-shfmt.git</span></span>\n<span class="line"></span></code></pre></div><p>使用以下命令安装这些版本来开发 <code>asdf</code>：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>\n<span class="line"></span></code></pre></div><p>在本地机器的开发过程中不使用 <code>asdf</code> 来管理工具 <em>或许</em> 对你有帮助，因为你可能需要打破某些可能会影响到你的开发工具链的功能。以下是所需工具的原始列表：</p>',10),p={href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"},i=t("bats-core"),d=t("：Bash 自动化测试系统，用于单元测试 Bash 或 POSIX 兼容脚本。"),h={href:"https://github.com/koalaman/shellcheck",target:"_blank",rel:"noopener noreferrer"},u=t("shellcheck"),b=t("：Shell 脚本的静态分析工具。"),f={href:"https://github.com/mvdan/sh",target:"_blank",rel:"noopener noreferrer"},g=t("shfmt"),m=t("：支持 Bash 的 Shell 解析器、格式化器和解释器；包含 shfmt。"),F=o('<h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2><p>如果你想要在不更改已安装的 <code>asdf</code> 的情况下尝试应用你的更改，可以将 <code>$ASDF_DIR</code> 变量设置为克隆存储库的路径，并临时将目录的 <code>bin</code> 和 <code>shims</code> 目录添加到你的路径中。</p><p>最好在提交或推送到远程之前，在本地做好格式化、lint 检查和测试你的代码。可以使用以下脚本/命令：</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># 脚本检查</span></span>\n<span class="line"><span style="color:#F8F8F2;">./scripts/shellcheck.bash</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;"># 格式化</span></span>\n<span class="line"><span style="color:#F8F8F2;">./scripts/shfmt.bash</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#88846F;"># 测试：所有案例</span></span>\n<span class="line"><span style="color:#F8F8F2;">bats test/</span></span>\n<span class="line"><span style="color:#88846F;"># 测试：特定命令</span></span>\n<span class="line"><span style="color:#F8F8F2;">bats test/list_commands.bash</span></span>\n<span class="line"></span></code></pre></div>',4),y={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"提示",-1),v=n("strong",null,"增加测试！",-1),x=t(" - 新特性需要进行测试，并加快错误修复的审查速度。请在创建拉取请求之前覆盖新的代码路径。查看 "),_={href:"https://bats-core.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},q=t("bats-core 文档"),B=t(" 了解更多。"),D=n("h2",{id:"bats-测试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bats-测试","aria-hidden":"true"},"#"),t(" Bats 测试")],-1),S=n("strong",null,"强烈建议",-1),w=t("在编写测试之前检查现有的测试套件和 "),E={href:"https://bats-core.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},G=t("bats-core 文档"),z=t("。"),A=o('<p>Bats 调试有时可能很困难。使用带有 <code>-t</code> 标识的 TAP 输出将使你能够在测试执行期间打印带有特殊文件描述符 <code>&gt;&amp;3</code> 的输出，从而简化调试。例如：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># test/some_tests.bats</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#66D9EF;">printf</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;%s\\n&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>\n<span class="line"><span style="color:#66D9EF;">printf</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;%s\\n&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&amp;3</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),P=t("进一步相关文档请查看 bats-core 的 "),V={href:"https://bats-core.readthedocs.io/en/stable/writing-tests.html#printing-to-the-terminal",target:"_blank",rel:"noopener noreferrer"},I=t("Printing to the Terminal"),O=t(" 部分."),R=n("h2",{id:"拉取请求、发布以及约定式提交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#拉取请求、发布以及约定式提交","aria-hidden":"true"},"#"),t(" 拉取请求、发布以及约定式提交")],-1),T=n("code",null,"asdf",-1),j=t(" 正在使用一个名为 "),H={href:"https://github.com/googleapis/release-please",target:"_blank",rel:"noopener noreferrer"},L=t("Release Please"),U=t(" 的自动发布工具来自动碰撞 "),W={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},C=t("SemVer"),N=t(" 版本并生成 "),X={href:"https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},$=t("变更日志"),J=t("。这个信息是通过读取自上次发布以来的提交历史记录来确定的。"),K={href:"https://www.conventionalcommits.org/zh-hans/",target:"_blank",rel:"noopener noreferrer"},M=t("约定式提交"),Q=t(" 定义了拉取请求标题的格式，该标题成为默认分支上的提交消息格式。这是通过 Github Action "),Y={href:"https://github.com/amannn/action-semantic-pull-request",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"amannn/action-semantic-pull-request",-1),ee=t(" 强制执行的。"),se=o('<p>约定式提交遵循以下格式：</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">&lt;type&gt;[optional scope][optional !]: &lt;description&gt;\n\n&lt;!-- 例子 --&gt;\nfix: some fix\nfeat: a new feature\ndocs: some documentation update\ndocs(website): some change for the website\nfeat!: feature with breaking change\n</span></span></code></pre></div><p><code>&lt;types&gt;</code> 的所有类型包含： <code>feat</code>、<code>fix</code>、<code>docs</code>、<code>style</code>、<code>refactor</code>、<code>perf</code>、<code>test</code>、<code>build</code>、<code>ci</code>、<code>chore</code>、<code>revert</code>。</p><ul><li><code>!</code>：表示重大更改</li><li><code>fix</code>：将会创建一个新的 SemVer <code>patch</code> 补丁</li><li><code>feat</code>：将会创建一个新的 SemVer <code>minor</code> 小版本</li><li><code>&lt;type&gt;!</code>：将会创建一个新的 SemVer <code>major</code> 大版本</li></ul><p>拉取请求标题必须遵循这种格式。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>请使用约定式提交信息格式作为拉取请求标题。</p></div><h2 id="docker-镜像" tabindex="-1"><a class="header-anchor" href="#docker-镜像" aria-hidden="true">#</a> Docker 镜像</h2>',7),ae={href:"https://github.com/vic/asdf-alpine",target:"_blank",rel:"noopener noreferrer"},ne=t("asdf-alpine"),le=t(" 和 "),oe={href:"https://github.com/vic/asdf-ubuntu",target:"_blank",rel:"noopener noreferrer"},te=t("asdf-ubuntu"),re=t(" 项目正在努力提供一些 asdf 工具的容器化镜像。你可以使用这些容器镜像作为开发服务器的基础镜像，或者运行生产应用。");r.render=function(o,t){const r=e("OutboundLink");return s(),a(l,null,[c,n("ul",null,[n("li",null,[n("a",p,[i,n(r)]),d]),n("li",null,[n("a",h,[u,n(r)]),b]),n("li",null,[n("a",f,[g,n(r)]),m])]),F,n("div",y,[k,n("p",null,[v,x,n("a",_,[q,n(r)]),B])]),D,n("p",null,[S,w,n("a",E,[G,n(r)]),z]),A,n("p",null,[P,n("a",V,[I,n(r)]),O]),R,n("p",null,[T,j,n("a",H,[L,n(r)]),U,n("a",W,[C,n(r)]),N,n("a",X,[$,n(r)]),J]),n("p",null,[n("a",K,[M,n(r)]),Q,n("a",Y,[Z,n(r)]),ee]),se,n("p",null,[n("a",ae,[ne,n(r)]),le,n("a",oe,[te,n(r)]),re])],64)};export default r;
