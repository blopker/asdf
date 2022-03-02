import{r as e,o as l,c as t,a as d,F as o,b as a,d as s}from"./app.0e7b70bd.js";const n={},c=a('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p><code>asdf</code> 配置既包括可共享的 <code>.tool-versions</code> 文件，也包括用户特定的自定义 <code>.asdfrc</code> 和环境变量。</p><h2 id="tool-versions" tabindex="-1"><a class="header-anchor" href="#tool-versions" aria-hidden="true">#</a> <code>.tool-versions</code></h2><p>无论何时 <code>.tool-versions</code> 出现在目录中，它所声明的工具版本将会被用于该目录和任意子目录。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>全局默认配置将设置在文件<code>$HOME/.tool-versions</code> 中</p></div><p>一个 <code>.tool-versions</code> 文件示例如下所示：</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3\nnodejs 10.15.0\n</span></span></code></pre></div><p>你也可以包含注释在里面：</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">ruby 2.5.3 # 这是一个注释\n# 这是另一个注释\nnodejs 10.15.0\n</span></span></code></pre></div><p>版本号可以有如下格式：</p><ul><li><code>10.15.0</code> - 实际的版本号。支持下载二进制文件的插件将会下载二进制文件。</li><li><code>ref:v1.0.2-a</code> 或者 <code>ref:39cb398vb39</code> - 指定标签/提交/分支从 github 下载并编译。</li><li><code>path:/src/elixir</code> - 要使用的工具的自定义编译版本的路径。这种方式供语言开发者等使用。</li><li><code>system</code> - 此关键字会导致 asdf 传递系统上未由 asdf 管理的工具版本。</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>多版本可以通过空格将它们分隔开来。比如，使用 Python <code>3.7.2</code> 回退到 Python <code>2.7.15</code> 最后回退到 <code>system</code> Python，可以将以下行的内容添加到 <code>.tool-versions</code> 文件中。</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">python 3.7.2 2.7.15 system\n</span></span></code></pre></div></div><p>为了安装 <code>.tool-versions</code> 文件中定义的所有工具，在包含 <code>.tool-versions</code> 文件的目录中不带其他参数执行 <code>asdf install</code> 命令。</p><p>为了安装 <code>.tool-versions</code> 文件中定义的某个工具，在包含 <code>.tool-versions</code> 文件的目录中运行 <code>asdf install &lt;name&gt;</code> 命令。这个工具将会安装 <code>.tool-versions</code> 文件所指定的版本。</p><p>可以直接编辑这个文件或者使用 <code>asdf local</code> （或者 <code>asdf global</code>）来更新工具版本。</p><h2 id="home-asdfrc" tabindex="-1"><a class="header-anchor" href="#home-asdfrc" aria-hidden="true">#</a> <code>$HOME/.asdfrc</code></h2><p>给你的家目录添加一个 <code>.asdfrc</code> 文件然后 asdf 将会使用这个文件所指定的配置。下面的文件展示了所需的格式，其中包含用于演示的默认值：</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = no\nuse_release_candidates = no\nalways_keep_download = no\nplugin_repository_last_check_duration = 60\n</span></span></code></pre></div><h3 id="legacy-version-file" tabindex="-1"><a class="header-anchor" href="#legacy-version-file" aria-hidden="true">#</a> <code>legacy_version_file</code></h3><p>插件 <strong>支持</strong> 读取其他版本管理器使用的版本文件，比如，Ruby 的 <code>rbenv</code> 的 <code>.ruby-version</code> 文件。</p>',20),i=d("thead",null,[d("tr",null,[d("th",{style:{"text-align":"left"}},"选项"),d("th",{style:{"text-align":"left"}},"描述")])],-1),r={style:{"text-align":"left"}},u=d("code",null,"no",-1),p=s(),h=d("td",{style:{"text-align":"left"}},[s("从 "),d("code",null,".tool-versions"),s(" 文件读取版本")],-1),f=d("tr",null,[d("td",{style:{"text-align":"left"}},[d("code",null,"yes")]),d("td",{style:{"text-align":"left"}},[s("如果可行的话，从传统版本文件读取版本（"),d("code",null,".ruby-versions"),s("）")])],-1),y=d("h3",{id:"use-release-candidates",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#use-release-candidates","aria-hidden":"true"},"#"),s(),d("code",null,"use_release_candidates")],-1),g=d("p",null,[s("配置 "),d("code",null,"asdf update"),s(" 命令以升级到最新的候选版本，而不是最新的语义版本。")],-1),x=d("thead",null,[d("tr",null,[d("th",{style:{"text-align":"left"}},"选项"),d("th",{style:{"text-align":"left"}},"描述")])],-1),v={style:{"text-align":"left"}},b=d("code",null,"no",-1),_=s(),F=d("td",{style:{"text-align":"left"}},"语义版本被使用",-1),m=d("tr",null,[d("td",{style:{"text-align":"left"}},[d("code",null,"yes")]),d("td",{style:{"text-align":"left"}},"候选版本被使用")],-1),k=d("h3",{id:"always-keep-download",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#always-keep-download","aria-hidden":"true"},"#"),s(),d("code",null,"always_keep_download")],-1),w=d("p",null,[s("配置 "),d("code",null,"asdf install"),s(" 命令以保留或删除下载的源代码或二进制文件。")],-1),A=d("thead",null,[d("tr",null,[d("th",{style:{"text-align":"left"}},"选项"),d("th",{style:{"text-align":"left"}},"描述")])],-1),D={style:{"text-align":"left"}},E=d("code",null,"no",-1),I=s(),S=d("td",{style:{"text-align":"left"}},"在成功安装后删除源代码或二进制文件",-1),O=d("tr",null,[d("td",{style:{"text-align":"left"}},[d("code",null,"yes")]),d("td",{style:{"text-align":"left"}},"在成功安装后保留源代码或二进制文件")],-1),R=d("h3",{id:"plugin-repository-last-check-duration",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#plugin-repository-last-check-duration","aria-hidden":"true"},"#"),s(),d("code",null,"plugin_repository_last_check_duration")],-1),L=d("p",null,[s("配置自上次 asdf 插件存储库同步到下一次存储库同步的持续时间。命令 "),d("code",null,"asdf plugin add <name>"),s(" 或者 "),d("code",null,"asdf plugin list all"),s(" 将会触发持续时间的检查，如果持续时间已过，则进行同步。")],-1),P=d("thead",null,[d("tr",null,[d("th",{style:{"text-align":"left"}},"选项"),d("th",{style:{"text-align":"left"}},"描述")])],-1),j={style:{"text-align":"left"}},H=s("从 "),M=d("code",null,"1",-1),N=s(" 到 "),T=d("code",null,"999999999",-1),$=s(" 的数字 "),U=d("br",null,null,-1),B=s(),C=s(" 为 "),G=d("code",null,"60",-1),V=d("td",{style:{"text-align":"left"}},"如果已过自上次同步的持续时间，触发器事件发生时同步",-1),q=d("tr",null,[d("td",{style:{"text-align":"left"}},[d("code",null,"0")]),d("td",{style:{"text-align":"left"}},"每个触发器事件发生时同步")],-1),z=d("tr",null,[d("td",{style:{"text-align":"left"}},[d("code",null,"never")]),d("td",{style:{"text-align":"left"}},"从不同步")],-1),J=a('<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><ul><li><code>ASDF_CONFIG_FILE</code> - 如上所述默认为 <code>~/.asdfrc</code> 文件。可以被设置在任何位置。</li><li><code>ASDF_DEFAULT_TOOL_VERSIONS_FILENAME</code> - 存储工具名称和版本的文件名。默认为 <code>.tool-versions</code>。可以是任何有效的文件名。通常，除非你知道你希望 asdf 忽略 <code>.tool-versions</code> 文件，否则不应该覆盖默认值。</li><li><code>ASDF_DIR</code> - 默认为 <code>~/.asdf</code> - <code>asdf</code> 脚本的位置。如果你把 <code>asdf</code> 安装到了其他目录，请设置该变量到那个目录。比如，如果通过 AUR 进行安装，则应设置该变量为 <code>/opt/asdf-vm</code>。</li><li><code>ASDF_DATA_DIR</code> - 默认为 <code>~/.asdf</code> - <code>asdf</code> 安装插件、垫片和安装器的位置。可以被设置在上一节提到的生效 <code>asdf.sh</code> 或者 <code>asdf.fish</code> 之间的任何位置。对于 Elvish，这可以设置在 <code>use asdf</code> 上面。</li></ul><h2 id="内部配置" tabindex="-1"><a class="header-anchor" href="#内部配置" aria-hidden="true">#</a> 内部配置</h2><p>用户不必担心本节，因为它描述了对包管理器和集成者有用的 <code>asdf</code> 的内部配置。</p><ul><li><code>$ASDF_DIR/asdf_updates_disabled</code>：当此文件存在时（内容无关），通过 <code>asdf update</code> 命令进行的更新 将会被禁用。像 Pacman 或者 Homebrew 等包管理器使用它来确保个性化安装的正确的更新方法。</li></ul>',5);n.render=function(a,s){const n=e("Badge");return l(),t(o,null,[c,d("table",null,[i,d("tbody",null,[d("tr",null,[d("td",r,[u,p,d(n,{type:"tip",text:"默认",vertical:"middle"})]),h]),f])]),y,g,d("table",null,[x,d("tbody",null,[d("tr",null,[d("td",v,[b,_,d(n,{type:"tip",text:"默认",vertical:"middle"})]),F]),m])]),k,w,d("table",null,[A,d("tbody",null,[d("tr",null,[d("td",D,[E,I,d(n,{type:"tip",text:"默认",vertical:"middle"})]),S]),O])]),R,L,d("table",null,[P,d("tbody",null,[d("tr",null,[d("td",j,[H,M,N,T,$,U,B,d(n,{type:"tip",text:"默认",vertical:"middle"}),C,G]),V]),q,z])]),J],64)};export default n;
