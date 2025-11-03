
export const templates = {
  home: `
    <section class="hero container">
      <div>
        <h2 id="titulo-mvv">Missão, visão e valores</h2>
        <p>Apoiamos comunidades com projetos de educação, saúde e geração de renda.</p>
      </div>
      <picture>
        <source srcset="img/imagem1.png" type="image/png">
        <img src="img/imagem2.jpg" alt="Voluntários em ação em projeto social">
      </picture>
    </section>
    <section class="container mt-3">
      <h2 id="titulo-historico">Histórico e conquistas</h2>
      <div class="row" style="align-items:start;">
        <article class="card col-12 col-md-8">
          <h3>Linha do tempo</h3>
          <p>Desde 2015, impactamos mais de 10 mil pessoas com iniciativas contínuas.</p>
        </article>
        <aside class="card col-12 col-md-4" aria-label="Relatórios de transparência">
          <h3>Transparência</h3>
          <ul>
            <li><a href="#" aria-describedby="desc-rel">Relatório 2024 (PDF)</a></li>
          </ul>
          <p id="desc-rel">Prestação de contas anual com indicadores de impacto.</p>
        </aside>
      </div>
    </section>
  `,
  projetos: `
    <section class="container">
      <h2 id="titulo-lista-projetos">Projetos em andamento</h2>
      <div class="row" style="align-items:stretch;">
        <article class="card col-12 col-md-6 col-lg-4">
          <h3>Educação Digital</h3>
          <img src="img/projeto-educacao.png" alt="Crianças aprendendo tecnologia em sala de aula">
          <p>Curso de introdução à tecnologia para jovens.</p>
          <div class="mt-1"><span class="badge">Educação</span></div>
        </article>
        <article class="card col-12 col-md-6 col-lg-4">
          <h3>Saúde Comunitária</h3>
          <img src="img/projeto-saude.png" alt="Profissionais de saúde atendendo moradores">
          <p>Atendimentos básicos e campanhas de vacinação.</p>
          <div class="mt-1"><span class="badge">Saúde</span></div>
        </article>
        <article class="card col-12 col-md-6 col-lg-4">
          <h3>Campanha Inverno Solidário</h3>
          <img src="img/doacoes.png" alt="Pessoas doando agasalhos e cobertores">
          <p>Acompanhe metas e progresso em tempo real na campanha.</p>
          <div class="mt-1">
            <button class="btn btn-primary" data-modal-open="modal-doar">Doe agora</button>
          </div>
        </article>
      </div>
    </section>
    <section class="container mt-3">
      <h2 id="titulo-doacoes">Doações e campanhas</h2>
      <div class="row">
        <aside class="card col-12 col-md-6" aria-label="Como doar">
          <h3>Como doar</h3>
          <p>Doe via PIX, cartão ou boleto. Relatórios de prestação de contas disponíveis.</p>
        </aside>
        <div class="card col-12 col-md-6">
          <h3>Transparência</h3>
          <p>Acompanhe relatórios e metas da campanha.</p>
        </div>
      </div>

      <!-- Modal -->
      <div id="modal-doar" class="modal-backdrop" aria-hidden="true">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-doar-title">
          <h2 id="modal-doar-title">Doar para Campanha Inverno Solidário</h2>
          <p>Escolha a forma de doação. Suas doações ajudam famílias em situação de vulnerabilidade.</p>
          <div style="display:flex;gap:12px;margin-top:16px;">
            <button class="btn btn-primary" data-modal-close>Doar via PIX</button>
            <button class="btn" data-modal-close>Fechar</button>
          </div>
        </div>
      </div>
    </section>
  `,
  cadastro: `
    <section class="container">
      <h2 id="titulo-cadastro">Formulário de inscrição</h2>
      <form id="form-cadastro" action="#" method="post" novalidate>
        <fieldset>
          <legend>Dados pessoais</legend>
          <div class="field">
            <label for="nome">Nome completo</label>
            <input id="nome" name="nome" type="text" placeholder="Seu nome" required minlength="3" autocomplete="name">
          </div>
          <div class="field">
            <label for="email">E-mail</label>
            <input id="email" name="email" type="email" placeholder="seuemail@exemplo.com" required autocomplete="email">
          </div>
          <div class="field">
            <label for="cpf">CPF</label>
            <input id="cpf" name="cpf" type="text" inputmode="numeric" placeholder="000.000.000-00" required aria-describedby="cpfHelp" maxlength="14">
            <small id="cpfHelp">Formato: 000.000.000-00</small>
          </div>
          <div class="field">
            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" inputmode="tel" placeholder="(11) 90000-0000" required maxlength="15">
          </div>
          <div class="field">
            <label for="nascimento">Data de nascimento</label>
            <input id="nascimento" name="nascimento" type="date" required>
          </div>
        </fieldset>
        <fieldset>
          <legend>Endereço</legend>
          <div class="field">
            <label for="endereco">Endereço</label>
            <input id="endereco" name="endereco" type="text" placeholder="Rua, número" required autocomplete="address-line1">
          </div>
          <div class="field">
            <label for="cep">CEP</label>
            <input id="cep" name="cep" type="text" inputmode="numeric" placeholder="00000-000" required maxlength="9">
          </div>
          <div class="field">
            <label for="cidade">Cidade</label>
            <input id="cidade" name="cidade" type="text" placeholder="Sua cidade" required autocomplete="address-level2">
          </div>
          <div class="field">
            <label for="estado">Estado</label>
            <select id="estado" name="estado" required autocomplete="address-level1">
              <option value="" selected disabled>Selecione</option>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="MG">MG</option>
              <option value="RS">RS</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Perfil</legend>
          <div class="field">
            <label for="perfil">Quero me cadastrar como</label>
            <select id="perfil" name="perfil" required>
              <option value="" selected disabled>Selecione</option>
              <option value="voluntario">Voluntário</option>
              <option value="doador">Doador</option>
              <option value="apoiador">Apoiador</option>
            </select>
          </div>
        </fieldset>
        <div class="actions">
          <button type="submit" class="btn btn-primary">Enviar</button>
          <button type="reset" class="btn secondary">Limpar</button>
        </div>
      </form>
    </section>
  `
};
