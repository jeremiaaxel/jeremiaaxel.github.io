<script lang="ts">
    import type { SkillDescription } from "$lib/types/skillDescription";

    export let data: SkillDescription[];
</script>


<section class="skills-description">
    <h3 class="text-3xl">Skills</h3>
    <div class="flex flex-col space-y-3">
        {#each data as skill}
            <div class="flex flex-col space-x-2">
                <h3 class="text-xl capitalize">{skill.name}</h3>
                <p>{skill.description}</p>
            </div>
        {/each}
    </div>
</section>